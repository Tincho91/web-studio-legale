import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface FormErrors {
  nomeCompleto?: string;
  indirizzoEmail?: string;
  telefono?: string;
  consent?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { nomeCompleto, indirizzoEmail, telefono, tipoServizio, consent } = req.body;
  let errors: FormErrors = {};

  // Validation checks
  if (!nomeCompleto) errors.nomeCompleto = 'Nome completo obbligatorio.';
  if (!indirizzoEmail) errors.indirizzoEmail = 'Indirizzo email obbligatorio.';
  if (!telefono) errors.telefono = 'Telefono obbligatorio.';
  if (!consent) errors.consent = 'Devi accettare l\'informativa per continuare.';

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  // Nodemailer configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: process.env.SMTP_EMAIL,
    subject: 'Nuovo Contatto dal Sito Web',
    html: `
      <h3>Nuovo Contatto da Studio Legale</h3>
      <p><strong>Nome Completo:</strong> ${nomeCompleto}</p>
      <p><strong>Email:</strong> ${indirizzoEmail}</p>
      <p><strong>Telefono:</strong> ${telefono}</p>
      <p><strong>Servizio Richiesto:</strong> ${tipoServizio}</p>
      <p><strong>Consenso alla Privacy:</strong> Accettato</p>
    `,
  };

  try {
    // Sending the email
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email inviata correttamente.' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Errore durante l\'invio dell\'email.' });
  }
}