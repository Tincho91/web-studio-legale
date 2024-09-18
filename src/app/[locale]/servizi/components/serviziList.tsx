import { FC } from 'react';
import { useTranslations } from 'next-intl';
import FadeInFrom from '@/components/animations/fadeInFrom';
import { BsChatDots } from 'react-icons/bs';

interface Service {
  title: string;
  description: string;
  bgImage: string;
}

const services: Service[] = [
  {
    title: "services.cittadinanzaItaliana.title",
    description: "services.cittadinanzaItaliana.description",
    bgImage: "/images/servicios1.jpg",
  },
  {
    title: "services.dirittiDegliImmigrati.title",
    description: "services.dirittiDegliImmigrati.description",
    bgImage: "/images/servicios2.jpg",
  },
  {
    title: "services.dirittoBancario.title",
    description: "services.dirittoBancario.description",
    bgImage: "/images/servicios3.jpg",
  },
  {
    title: "services.consulenzaAlleImprese.title",
    description: "services.consulenzaAlleImprese.description",
    bgImage: "/images/servicios4.jpg",
  },
  {
    title: "services.crisiDImpresa.title",
    description: "services.crisiDImpresa.description",
    bgImage: "/images/servicios5.jpg",
  },
  {
    title: "services.dirittoImmobiliare.title",
    description: "services.dirittoImmobiliare.description",
    bgImage: "/images/servicios6.jpg",
  },
  {
    title: "services.dirittoDiFamiglia.title",
    description: "services.dirittoDiFamiglia.description",
    bgImage: "/images/servicios7.jpg",
  },
  {
    title: "services.dirittoDelloSport.title",
    description: "services.dirittoDelloSport.description",
    bgImage: "/images/servicios8.jpg",
  },
  {
    title: "services.dirittoCivile.title",
    description: "services.dirittoCivile.description",
    bgImage: "/images/servicios9.jpg",
  },
  {
    title: "services.dirittoAmministrativo.title",
    description: "services.dirittoAmministrativo.description",
    bgImage: "/images/servicios10.jpg",
  },
  {
    title: "services.dirittoSanitario.title",
    description: "services.dirittoSanitario.description",
    bgImage: "/images/servicios11.jpg",
  },
  {
    title: "services.dirittoDelLavoro.title",
    description: "services.dirittoDelLavoro.description",
    bgImage: "/images/servicios12.jpg",
  },
  {
    title: "services.mediazioni.title",
    description: "services.mediazioni.description",
    bgImage: "/images/servicios13.jpg",
  },
];

const ServiziList: FC = () => {
  const t = useTranslations('ServiziList');

  return (
    <>
      {services.map((service, index) => (
        <div
          key={index}
          className={`relative ${index % 2 === 0 ? 'bg-[#090D1D]' : 'bg-white'}`}
        >
          <div className="container max-w-[1200px] mx-auto py-8 px-8 relative overflow-hidden">
            <div
              className="min-h-[375px] relative flex flex-col items-center justify-center text-center px-6 md:px-10 mb-8 text-white bg-cover bg-center pt-10 pb-20                                                                                                   "
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%), url('${service.bgImage}')`,
              }}
            >
              <FadeInFrom id={index.toString()} direction="bottom">
                <h2 className="text-white font-ruda text-5xl md:text-6xl">
                  {t(service.title)}
                </h2>

                {index === 0 && (
                  <p className="text-white font-roboto max-w-full flex-1 mt-4">
                    {t(service.description)}
                  </p>
                )}
              </FadeInFrom>
              <a href={index === 0 ? `/${t('locale')}/servizi/cittadinanza` : '#contatti'}>
                <div
                  className={`flex items-center gap-5 justify-center absolute bottom-0 right-0 bg-${index % 2 === 0 ? '[#090D1D]' : 'white'} z-1 py-5 px-5 text-${index % 2 === 0 ? 'white' : 'black'} font-roboto text-16 font-light tracking-[4.8px]`}
                >
                  <BsChatDots className="text-xl" />
                  <span className={`text-${index % 2 === 0 ? 'white' : 'black'}`}>
                    {index === 0 ? t('viewDetails') : t('requestInfo')}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiziList;

