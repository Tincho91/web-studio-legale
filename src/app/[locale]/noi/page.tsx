import React from 'react';
import { useTranslations } from 'next-intl';
import FadeInFrom from '@/components/animations/fadeInFrom';
import Info from './components/info';


const Nosotros = () => {
  const t = useTranslations('Nosotros');

  return (
    <>
      <div className="relative bg-cover bg-no-repeat h-96 max-h-[60vh] bg-[75%] md:bg-right-top"
        style={{
          backgroundImage: "url('/images/teamBannerDesktop.jpg')"
        }}>
        <div className="container mx-auto max-w-7xl ">
          <div className="absolute w-[75%] sm:w-[65%] md:w-[45%] xl:w-[33%] top-[50%] sm:top-[35%] md:top-[25%] bg-black bg-opacity-65 text-white p-5 sm:p-10">
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
