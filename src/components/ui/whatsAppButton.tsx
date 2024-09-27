'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <button
      type="button"
      className="w-full bg-green-500 text-gray-900 py-3 flex justify-center items-center gap-2"
      onClick={() => window.open('https://wa.me/1234567890', '_blank')}
    >
      <FaWhatsapp />
      <span>WhatsApp</span>
    </button>
  );
}