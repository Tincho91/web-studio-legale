import { useTranslations } from 'next-intl';
import FadeInFrom from '@/components/animations/fadeInFrom';

const Info = () => {
  const t = useTranslations('Nosotros');

  return (
    <div className="relative">
      {/* Fondo superior */}
      <div
        className="absolute top-0 left-0 right-0 h-[200px] sm:h-[280px] bg-blue-900"
        style={{ zIndex: -1 }}
      />
      <div className="container mx-auto max-w-7xl">
        <div className="py-20">
          <div className="flex flex-col">
            {/* Team Member Section */}
            <FadeInFrom direction="left" id="mariaAgo">
              <div className="sm:flex">
                <img
                  src="/images/team2-2.png"
                  className="sm:h-[400px] object-cover"
                  alt="Maria Agovino"
                />
                <div className="sm:bg-gray-200 my-auto sm:ml-[-5%] p-10">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-ruda py-3">
                    {t('teamTitle')}
                  </h2>
                  <p className="text-base sm:text-lg font-roboto">
                    {t('teamDescription')}
                  </p>
                </div>
              </div>
            </FadeInFrom>

            {/* Long Description Section */}
            <div className="bg-blue-900 my-[-5%] sm:my-0 w-[70%] p-10 mx-auto">
              <p className="text-white text-base font-roboto">
                {t('longDescription')}
              </p>
            </div>

            {/* Maura Monteforte Section */}
            <div className="sm:flex">
              <div className="sm:bg-gray-200 my-auto sm:mr-[-5%] p-10 z-5">
                <FadeInFrom direction="right" id="mauraMon">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-ruda py-3 text-right">
                    {t('teamMemberTitle')}
                  </h2>
                  <p className="text-base sm:text-lg font-roboto text-right">
                    {t('teamMemberDescription')}
                  </p>
                </FadeInFrom>
              </div>
              <FadeInFrom direction="right" id="mauraMon">
                <img
                  src="/images/team1-2.jpg"
                  className="sm:h-[400px] object-cover"
                  alt="Maura Monteforte"
                />
              </FadeInFrom>
            </div>
          </div>
        </div>
      </div>

      {/* Fondo inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[280px] bg-blue-900"
        style={{ zIndex: -1 }}
      />
    </div>
  );
};

export default Info;

