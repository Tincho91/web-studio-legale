import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import HamburgerMenu from './ui/hamburgerMenu';
import { useTranslations } from 'next-intl';

const Navbar = () => {
  const t = useTranslations();

  const menuTranslations = {
    home: t('HamburgerMenu.home'),
    aboutUs: t('HamburgerMenu.aboutUs'),
    services: t('HamburgerMenu.services'),
    contact: t('HamburgerMenu.contact'),
    locale: t('HamburgerMenu.locale'),
  };

  return (
    <nav className="bg-white py-3">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 flex items-center justify-between">
        
        {/* Menú Hamburguesa alineado a la izquierda */}
        <div className="flex items-center md:w-auto">
          <HamburgerMenu translations={menuTranslations} />
        </div>

        {/* Texto centrado */}
        <div className="flex flex-grow items-center justify-center">
          <a href="/" className="flex flex-col items-center text-center">
            <span className="text-[4vw] md:text-3xl font-bold text-[#090D1D]">
              Studio Legale Agovino Monteforte
            </span>
            <div className="flex items-center justify-center mt-1">
              <div className="w-10 md:w-20 border-t-2 border-[#2D4496]"></div>
              <span className="mx-3 md:text-3xl text-[#2D4496]">
                Avvocati di Fiducia
              </span>
              <div className="w-10 md:w-20 border-t-2 border-[#2D4496]"></div>
            </div>
          </a>
        </div>

        {/* Iconos Email y WhatsApp alineados a la derecha */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="mailto:example@example.com"
            className="bg-[#2D4496] text-white rounded-full p-4 flex items-center justify-center"
            aria-label="Email"
          >
            <FaEnvelope className="text-3xl" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=PHONE_NUMBER"
            className="bg-[#25D366] text-white rounded-full p-4 flex items-center justify-center"
            aria-label="Whatsapp"
          >
            <FaWhatsapp className="text-3xl" />
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;