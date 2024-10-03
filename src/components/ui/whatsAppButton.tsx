'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <button
      type="button"
      className="w-full bg-green-500 text-gray-900 py-3"
    >
      <a href="https://api.whatsapp.com/send?phone=393355388666" target="_blank" className="text-white flex justify-center items-center gap-2">
        <FaWhatsapp />
        <span>WhatsApp</span>
      </a>
    </button>
  );
}