import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const nomeCompleto = formData.get('nomeCompleto')?.toString() || '';
    const indirizzoEmail = formData.get('indirizzoEmail')?.toString() || '';
    const telefono = formData.get('telefono')?.toString() || '';
    const tipoServizio = formData.get('tipoServizio')?.toString() || '';
    const consent = formData.get('consent')?.toString() || '';

    // Validate form data
    const errors: { [key: string]: string } = {};
    if (!nomeCompleto) errors.nomeCompleto = 'Nome completo obbligatorio.';
    if (!indirizzoEmail) errors.indirizzoEmail = 'Indirizzo email obbligatorio.';
    if (!telefono) errors.telefono = 'Telefono obbligatorio.';
    if (!consent) errors.consent = "Devi accettare l'informativa per continuare.";

    // If there are validation errors, return them in the response
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Define the email content
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL,
      subject: 'Nuovo Contatto dal Form',
      html: `
        <h3>Nuovo contatto da ${nomeCompleto}</h3>
        <p><strong>Email:</strong> ${indirizzoEmail}</p>
        <p><strong>Telefono:</strong> ${telefono}</p>
        <p><strong>Servizio Richiesto:</strong> ${tipoServizio}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email inviata con successo!' }, { status: 200 });
  } catch (error) {
    console.error('Errore durante l\'invio dell\'email:', error);
    return NextResponse.json({ message: 'Errore durante l\'invio dell\'email' }, { status: 500 });
  }
}