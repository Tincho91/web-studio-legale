import WhatsAppButton from '@/components/ui/whatsAppButton';
import { useTranslations } from 'next-intl';
import SendButton from './ui/sendButton';

const ContactForm = () => {
  const t = useTranslations('ContactForm');

  return (
    <div className="bg-[#ECF0FF]" id="contatti">
      <div className="max-w-screen-xl mx-auto px-8 py-12">
        <h1 className="text-black text-center text-4xl md:text-5xl font-bold pb-5">{t('title')}</h1>
        <div className="bg-white p-10 border-2 border-gray-900">
          <form id="contactForm" className="space-y-4">
            <div className="form-group">
              <input
                type="text"
                name="nomeCompleto"
                placeholder={t('inputPlaceholders.nomeCompleto')}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="indirizzoEmail"
                placeholder={t('inputPlaceholders.indirizzoEmail')}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="telefono"
                placeholder={t('inputPlaceholders.telefono')}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="form-group">
              <select
                name="tipoServizio"
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">{t('inputPlaceholders.tipoServizio')}</option>
                <option value="Cittadinanza Italiana">{t('selectOptions.CittadinanzaItaliana')}</option>
                <option value="Banking Law">{t('selectOptions.DirittoLavoro')}</option>
                <option value="Compliance">{t('selectOptions.DirittoCivile')}</option>
                <option value="Altro">{t('selectOptions.Altro')}</option>
              </select>
            </div>

            {/* Checkbox for consent */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                required
                className="mr-2"
              />
              <label htmlFor="consent" className="text-gray-700">
                Ai sensi e per gli effetti degli articoli 7,13 e 23 del D. L. N.196/2003, dichiaro di aver preso visione dell&apos;informativa di Studio Legale Agovino Monteforte per il trattamento dei dati personali.
              </label>
            </div>

            <SendButton />
          </form>
          <div className='mt-5'>
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;