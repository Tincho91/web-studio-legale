import React from 'react';
import { useTranslations } from 'next-intl';
import FadeInFrom from '@/components/animations/fadeInFrom';
import Info from './components/info';


const Nosotros = () => {
  const t = useTranslations('Nosotros');

  return (
    <>
      <div className="relative bg-cover bg-no-repeat bg-right max-h-[40vh] md:bg-right-top"
        style={{
          backgroundImage: "url('/images/teamBannerDesktop.png')"
        }}>
        <div className="container mx-auto max-w-7xl h-80 sm:h-96 lg:h-screen">
          <div className="absolute top-1/2 left-1/2 md:left-0 md:top-1/3 transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:-translate-y-0 bg-black bg-opacity-50 text-white sm:bg-white sm:bg-opacity-80 sm:text-[#090D1D] p-5 sm:p-10 w-4/5 sm:w-2/3 lg:w-1/3 rounded-lg">
            <FadeInFrom id="teamHero" direction="scale">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{t('teamTitle')}</h1>
              <p className="text-sm sm:text-base">{t('teamDescription')}</p>
            </FadeInFrom>
          </div>
        </div>
      </div>
      <Info />
    </>
  );
};

export default Nosotros;
