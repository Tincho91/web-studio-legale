import { useTranslations } from 'next-intl';
import { FaArrowDown } from 'react-icons/fa';
import FadeInFrom from './animations/fadeInFrom';
import { motion } from 'framer-motion';

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <>
      <div
        className="relative h-[calc(95vh-150px)] sm:h-[calc(95vh-76px)] pb-10 lg:pb-auto pt-10 bg-cover bg-top"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0) 100%), url('/images/hero.jpeg')",
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-top z-[-1]"></div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-0 sm:mb-5 xl:px-0">
          <FadeInFrom direction="bottom" id="heroText">
            <div className="flex flex-col items-start h-full w-full lg:w-3/4">
              <h1 className="text-4xl md:text-5xl font-bold font-ruda">
                {t('title')}{" "}
                <span className="relative inline-block">
                  <span className="absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 w-[102%] h-1/2 bg-[#B9D0FF] z-1"></span>
                  <span className="relative z-2">
                    {t('highlightedText')}
                  </span>
                </span>
              </h1>
              <p className="text-2xl mt-4 font-roboto">
                {t('subtitle')}
              </p>
            </div>
          </FadeInFrom>
        </div>
      </div>
      <div className="container mx-auto max-w-screen-xl relative">
        <a
          className="font-roboto text-16 font-light tracking-[4.8px] absolute bottom-0 right-0 bg-[#090D1D] z-1 p-5 text-white"
          href="#servizi"
        >
          <div className="flex items-center gap-5">
            <FaArrowDown />
            <span>{t('discoverMore')}</span>
          </div>
        </a>
      </div>
    </>
  );
};

export default Hero;
