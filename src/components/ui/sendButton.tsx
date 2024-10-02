'use client';

import { useState, useEffect } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const SendButton = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const cooldownTime = 300000;

  useEffect(() => {
    const lastSubmitTime = localStorage.getItem('lastSubmitTime');
    if (lastSubmitTime) {
      const timePassed = Date.now() - parseInt(lastSubmitTime, 10);
      if (timePassed < cooldownTime) {
        setCooldown(true);
        const remainingTime = cooldownTime - timePassed;

        setTimeout(() => setCooldown(false), remainingTime);
      }
    }
  }, []);

  const handleSubmit = async () => {
    if (isSubmitting) return;

    if (cooldown) {
      const remainingTime = cooldownTime - (Date.now() - parseInt(localStorage.getItem('lastSubmitTime') || '0', 10));
      const minutes = Math.floor(remainingTime / 60000);
      const seconds = Math.floor((remainingTime % 60000) / 1000);

      Swal.fire({
        icon: 'warning',
        title: 'Attenzione!',
        text: `Devi aspettare ${minutes} minuti e ${seconds} secondi prima di inviare di nuovo.`,
      });
      return;
    }

    setIsSubmitting(true);

    const form = document.getElementById('contactForm') as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        form.reset();
        localStorage.setItem('lastSubmitTime', Date.now().toString());
        setCooldown(true);

        Swal.fire({
          icon: 'success',
          title: 'Email inviata!',
          text: 'La tua email è stata inviata con successo.',
        });

        
        setTimeout(() => setCooldown(false), cooldownTime);
      } else {
        const errorData = await response.json();
        Swal.fire({
          icon: 'error',
          title: 'Errore!',
          text: errorData.errors
            ? 'Errore nei dati inviati. Controlla e riprova.'
            : "Errore nell'invio dell'email.",
        });
      }
    } catch (error) {
      console.error('Error while sending email:', error);
      Swal.fire({
        icon: 'error',
        title: 'Errore!',
        text: "Errore nell'invio dell'email. Riprova più tardi.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleSubmit}
        className="w-full bg-gray-900 text-white py-3 flex justify-center items-center gap-2"
        disabled={isSubmitting}
      >
        <AiOutlineSend />
        <span>{isSubmitting ? 'Invio in corso...' : 'Invia'}</span>
      </button>
    </div>
  );
};

export default SendButton;