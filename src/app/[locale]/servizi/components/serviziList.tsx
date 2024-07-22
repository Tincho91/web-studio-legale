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
    title: "services.criminalLaw.title",
    description: "services.criminalLaw.description",
    bgImage: "/images/servicios1.jpg",
  },
  {
    title: "services.civilLaw.title",
    description: "services.civilLaw.description",
    bgImage: "/images/servicios2.jpg",
  },
  {
    title: "services.consulting.title",
    description: "services.consulting.description",
    bgImage: "/images/servicios3.jpg",
  },
  {
    title: "services.extrajudicial.title",
    description: "services.extrajudicial.description",
    bgImage: "/images/servicios4.jpg",
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
              className="min-h-[375px] relative flex flex-col items-center text-left px-6 md:px-10 pt-12 md:pt-10 pb-20 md:pb-10 mb-8 text-white bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%), url('${service.bgImage}')`,
              }}
            >
              <FadeInFrom id={index.toString()} direction="bottom">
                <h2 className="text-white pb-5 font-ruda text-4xl md:text-5xl">
                  {t(service.title)}
                </h2>
              </FadeInFrom>
              <FadeInFrom id={index.toString()} direction="bottom">
                <p className="text-white font-roboto max-w-full flex-1">
                  {t(service.description)}
                </p>
              </FadeInFrom>

              <a href="/servizi">
                <div
                  className={`flex items-center gap-5 justify-center absolute bottom-0 right-0 bg-${index % 2 === 0 ? '[#090D1D]' : 'white'} z-1 py-5 px-5 text-${index % 2 === 0 ? 'white' : 'black'} font-roboto text-16 font-light tracking-[4.8px]`}
                >
                  <BsChatDots className="text-xl" />
                  <span className={`text-${index % 2 === 0 ? 'white' : 'black'}`}>
                    {t('requestInfo')}
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
