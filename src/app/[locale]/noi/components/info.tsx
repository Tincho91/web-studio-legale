import { useTranslations } from 'next-intl';
import FadeInFrom from '@/components/animations/fadeInFrom';

const Info = () => {
  const t = useTranslations('Nosotros');

  return (
    <div className="relative overflow-x-hidden">
      {/* Fondo superior */}
      <div className="absolute top-0 left-0 right-0 h-[200px] sm:h-[280px] bg-[#090D1D]" style={{ zIndex: -1 }} />
      <div className="container mx-auto max-w-7xl">
        <div className="py-20 w-full sm:w-3/4 mx-auto">
          {/* Base breakpoint */}
          <div className="block sm:hidden">
            <FadeInFrom direction="left" id="mariaAgo">
              <img
                src="/images/team2-2.png"
                className="h-[250px] object-cover"
                alt={t('mariaAgovinoName')}
              />
            </FadeInFrom>
            <FadeInFrom direction="left" id="mariaAgo">
              <div className="py-5">
                <h2 className="text-3xl font-bold font-ruda">{t('mariaAgovinoName')}</h2>
                <p className="text-base font-roboto">
                  {t('mariaAgovinoDescription')}
                </p>
              </div>
            </FadeInFrom>
            <div className="relative py-5 px-4 mx-[-16px] bg-[#090D1D]">
              <div className="relative z-10">
                <p className="text-white font-roboto">
                  {t('longDescription')}
                </p>
              </div>
            </div>
            <div className="bg-white py-5">
              <FadeInFrom direction="right" id="mauraMon">
                <h2 className="text-3xl font-bold font-ruda text-right">{t('mauraMonteforteName')}</h2>
              </FadeInFrom>
              <FadeInFrom direction="right" id="mauraMon">
                <p className="text-base font-roboto text-right">
                  {t('mauraMonteforteDescription')}
                </p>
              </FadeInFrom>
            </div>
            <FadeInFrom direction="right" id="mauraMon">
              <div className="flex justify-end w-full">
                <img
                  src="/images/team1-2.jpg"
                  className="h-[250px] object-cover"
                  alt={t('mauraMonteforteName')}
                />
              </div>
            </FadeInFrom>
          </div>

          {/* Larger breakpoints */}
          <div className="hidden sm:flex flex-col">
            <FadeInFrom direction="left" id="mariaAgo">
              <div className="flex">
                <div className="w-full max-w-[250px]">
                  <img
                    src="/images/team2-2.png"
                    className="h-[400px] object-cover"
                    alt={t('mariaAgovinoName')}
                  />
                </div>
                <div className="bg-[#ECF0FF] my-auto ml-[-5%] p-10">
                  <h2 className="py-3 text-3xl sm:text-4xl lg:text-5xl font-bold font-ruda">
                    {t('mariaAgovinoName')}
                  </h2>
                  <p className="text-base sm:text-lg font-roboto">
                    {t('mariaAgovinoDescription')}
                  </p>
                </div>
              </div>
            </FadeInFrom>
            <div className="bg-[#090D1D] my-[-5%] w-3/4 p-10 mx-auto">
              <p className="text-white font-roboto">
                {t('longDescription')}
              </p>
            </div>
            <FadeInFrom direction="right" id="mauraMon">
              <div className="flex">
                <div className="bg-[#ECF0FF] my-auto mr-[-5%] p-10 z-10">
                  <h2 className="py-3 text-3xl sm:text-4xl lg:text-5xl font-bold font-ruda">
                    {t('mauraMonteforteName')}
                  </h2>
                  <p className="text-base sm:text-lg font-roboto">
                    {t('mauraMonteforteDescription')}
                  </p>
                </div>
                <div className="w-full max-w-[250px]">
                  <img
                    src="/images/team1-2.jpg"
                    className="h-[400px] object-cover"
                    alt={t('mauraMonteforteName')}
                  />
                </div>
              </div>
            </FadeInFrom>
          </div>
        </div>
      </div>

      {/* Fondo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-[280px] bg-[#090D1D]" style={{ zIndex: -1 }} />
    </div>
  );
};

export default Info;