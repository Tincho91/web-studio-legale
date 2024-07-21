import { useTranslations } from 'next-intl';
import Link from "next/link";
import { AiOutlineMessage } from "react-icons/ai";
import FadeInFrom from "./animations/fadeInFrom";

const Servizi = () => {
  const t = useTranslations('Servizi');

  return (
    <div className="bg-[#090D1D] relative" id="servizi">
      <div className="max-w-screen-xl mx-auto py-8 px-8 relative overflow-hidden">
        <div
          className="min-h-[375px] bg-cover bg-center relative flex flex-col items-center text-center px-6 md:px-10 pt-12 md:pt-10 pb-32 md:pb-10"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%), url('/images/servicios.jpg')`,
          }}
        >
          <FadeInFrom direction="left" id="homeServizi">
            <h2 className="text-white pb-5 font-ruda text-4xl md:text-5xl text-center">
              {t('title')}
            </h2>
            <p className="text-white font-roboto text-xl text-left">
              {t('description')}
            </p>
          </FadeInFrom>
          <Link href={`/${t('locale')}/servizi`}>
            <div className="flex items-center gap-5 justify-center absolute bottom-0 right-0 bg-[#090D1D] z-10 py-5 px-10 text-white font-roboto text-base font-light tracking-widest">
              <AiOutlineMessage size="16px" />
              <span>{t('seeServices')}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Servizi;