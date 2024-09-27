import { AiOutlineSend } from 'react-icons/ai';
import { useTranslations } from 'next-intl';

import WhatsAppButton from '@/components/ui/whatsAppButton';

const ContactForm: React.FC = () => {
  const t = useTranslations('ContactForm');

  return (
    <div className="bg-[#ECF0FF]" id='contatti'>
      <div className="max-w-screen-xl mx-auto px-8 py-12">
        <h1 className="text-black text-center text-4xl md:text-5xl font-bold pb-5">{t('title')}</h1>
        <div className="bg-white p-10 border-2 border-gray-900">
          <form method="POST" action="/api/submit-form" className="space-y-4">
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

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 flex justify-center items-center gap-2"
            >
              <AiOutlineSend />
              <span>{t('buttonText')}</span>
            </button>

            <WhatsAppButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;