import { FC } from 'react';
import { useTranslations } from 'next-intl';
import ServiziList from './components/serviziList';

const Servizi: FC = () => {
  const t = useTranslations('ServiziPage');

  return (
    <div className="relative pb-10 md:pb-auto bg-[#090D1D] z-0 overflow-x-hidden">
      <div className="absolute top-0 left-0 right-0 h-[250px] bg-cover bg-center z-0 bg-[url('/images/sellBannerMobile.png')] sm:bg-[url('/images/sellBanner.png')]"></div>

      <div className="container max-w-[1200px] mx-auto pt-10 z-1 relative">
        <div className="flex flex-col items-center h-full pb-10 text-center">
          <h1 className="text-4xl font-bold font-ruda text-white">
            {t('heading')} {" "}
            <span className="relative inline-block">
              <span className="absolute bottom-[-10%] left-[50%] translate-x-[-50%] w-[102%] h-[50%] bg-[#090D1D] z-1"></span>
              <span className="relative z-2">{t('highlight')}</span>
            </span>
            {t('headingSuffix')}
          </h1>
          <p className="text-md mt-4 font-roboto text-white">
            {t('description')}
          </p>
        </div>
        <ServiziList />
      </div>
    </div>
  );
};

export default Servizi;