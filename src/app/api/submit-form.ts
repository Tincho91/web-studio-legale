import { NextApiRequest, NextApiResponse } from 'next';

interface FormErrors {
  nomeCompleto?: string;
  indirizzoEmail?: string;
  telefono?: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Método no permitido
  }

  const { nomeCompleto, indirizzoEmail, telefono, tipoServizio } = req.body;
  let errors: FormErrors = {};

  if (!nomeCompleto) errors.nomeCompleto = 'Nome completo obbligatorio.';
  if (!indirizzoEmail) errors.indirizzoEmail = 'Indirizzo email obbligatorio.';
  if (!telefono) errors.telefono = 'Telefono obbligatorio.';

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  // Aquí puedes manejar el procesamiento adicional de los datos del formulario
  // Por ejemplo, guardar en una base de datos, enviar un correo electrónico, etc.

  return res.status(200).json({ message: 'Formulario enviado correctamente.' });
}
