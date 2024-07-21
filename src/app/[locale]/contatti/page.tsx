// Importar React y las animaciones necesarias
import React from 'react';
import FadeInFrom from '@/components/animations/fadeInFrom';
import { useTranslations } from 'next-intl';

const Contatti = () => {
  // Obtener las traducciones para esta sección
  const t = useTranslations('Contatti');

  return (
    <div className="relative pb-10 md:pb-0 bg-blue-900" id="contatti">
      {/* Fondo superior */}
      <div
        className="absolute inset-0 min-h-[250px] bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/images/sellBanner.png')` }}
      />

      <div className="container mx-auto pt-10 z-10 relative">
        <div className="flex flex-col items-center h-full pb-10 text-center">
          <FadeInFrom id='contattiHeroText' direction='bottom'>
            <h1 className="text-4xl font-bold text-white font-ruda">
              {t('mainHeading')}{' '}
              <span className="relative inline-block">
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-102% h-1/2 bg-blue-900 z-1"></span>
                <span className="relative z-2">{t('legalAssistance')}</span>
              </span>{' '}
              {t('legalNeed')}
            </h1>
            <p className="text-md mt-4 font-roboto text-white">
              {t('servicesDescriptionPrefix')}{' '}
              <strong>{t('legalServices')}</strong>{' '}
              {t('servicesDescriptionSuffix')}
              <br />
              <span className="block mt-4">{t('contactUs')}</span>
            </p>
          </FadeInFrom>
        </div>
      </div>
    </div>
  );
};

export default Contatti;
