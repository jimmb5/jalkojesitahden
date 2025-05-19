import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// Luo SMTP-transportteri
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Tarkista ympäristömuuttujat
const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error('Puuttuvat ympäristömuuttujat:', missingEnvVars.join(', '));
  process.exit(1);
}

// API-endpoint sähköpostin lähetykseen
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Ei sallittu' });
  }

  try {
    const { user_name, user_email, user_phone, message, contactPreference } = req.body;

    // Tarkista pakolliset kentät
    if (!user_name || !user_email || !user_phone || !message || !contactPreference) {
      return res.status(400).json({ 
        error: 'Puuttuvia kenttiä. Tarvittavat kentät: user_name, user_email, user_phone, message, contactPreference' 
      });
    }

    // Luo HTML-muotoiltu viesti
    const htmlContent = `
      <h2>Uusi yhteydenottopyyntö</h2>
      <p><strong>Nimi:</strong> ${user_name}</p>
      <p><strong>Sähköposti:</strong> ${user_email}</p>
      <p><strong>Puhelin:</strong> ${user_phone}</p>
      <p><strong>Yhteydenottotapa:</strong> ${contactPreference}</p>
      <h3>Viesti:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Lähetä sähköposti
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      replyTo: user_email,
      subject: `Yhteydenottopyyntö: ${user_name}`,
      text: `
        Nimi: ${user_name}
        Sähköposti: ${user_email}
        Puhelin: ${user_phone}
        Yhteydenottotapa: ${contactPreference}
        
        Viesti:
        ${message}
      `,
      html: htmlContent
    });

    return res.status(200).json({ 
      message: 'Sähköposti lähetetty onnistuneesti',
      messageId: info.messageId 
    });

  } catch (error) {
    console.error('Virhe sähköpostin lähetyksessä:', error);
    return res.status(500).json({ 
      error: 'Sähköpostin lähetys epäonnistui',
      details: error.message 
    });
  }
}
