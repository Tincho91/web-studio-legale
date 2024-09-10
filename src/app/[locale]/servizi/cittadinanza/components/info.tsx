import Link from 'next/link';
import { BsChatDots } from 'react-icons/bs';
import FadeInFrom from '@/components/animations/fadeInFrom';
import { useTranslations } from 'next-intl';

const Info = () => {
  const t = useTranslations('Info');

  const formatTextToHtml = (text: string) => {
    const formattedText = text
      .replace(/\[b\](.*?)\[\/b\]/g, '<strong>$1</strong>') // Bold
      .replace(/\n/g, '<br/>') // Line breaks
      .replace(/\[Cittadinanza Italiana 0039\]\(link, class: '(.+?)'\)/g, '<a href="https://cidadaniaitaliana0039.com.br/" class="$1">Cittadinanza Italiana 0039</a>'); // Link with class
    return formattedText;
  };

  const sections = [
    {
      title: 'section1.title',
      description: t('section1.description'),
      bgImage: '/images/italian-court.jpg',
    },
    {
      title: 'section2.title',
      description: t('section2.description'),
      bgImage: '/images/legal-assistance.jpeg',
    },
    {
      title: 'section3.title',
      description: t('section3.description'),
      bgImage: '/images/documents.jpg',
    },
    {
      title: 'section4.title',
      description: t('section4.description'),
      bgImage: '/images/required-documents.jpg',
    },
    {
      title: 'section5.title',
      description: t('section5.description'),
      bgImage: '/images/step-by-step.jpg',
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-12 overflow-hidden">
      {sections.map((section, index) => (
        <div key={index} className={`relative ${index % 2 === 0 ? 'bg-[#090D1D]' : 'bg-white'} mb-8`}>
          <div className="container max-w-[1200px] mx-auto py-8 px-8 relative overflow-hidden">
            <div
              className="min-h-[350px] relative flex flex-col items-center text-left px-6 md:px-10 py-12 text-white bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%), url('/images/required-documents.jpg')`,
              }}
            >
              <FadeInFrom id={index.toString()} direction="bottom">
                <h2 className="text-white pb-5 font-ruda text-3xl md:text-4xl lg:text-5xl">
                  {t(section.title)}
                </h2>
              </FadeInFrom>
              <FadeInFrom id={index.toString()} direction="bottom">
                <div
                  className="text-white font-roboto max-w-full"
                  dangerouslySetInnerHTML={{ __html: formatTextToHtml(section.description) }}
                />
              </FadeInFrom>
            </div>
          </div>
        </div>
      ))}


      {/* Botón de información */}
      <div className="flex justify-center mt-8">
        <FadeInFrom id="infoButton" direction="bottom">
          <Link href="#contatti">
            <div className="bg-white text-[#090D1D] py-5 px-10 inline-block font-roboto text-base font-light tracking-[4.8px] cursor-pointer">
              <BsChatDots className="text-xl inline-block mr-2" />
              {t('requestInfo')}
            </div>
          </Link>
        </FadeInFrom>
      </div>
    </div>
  );
};

export default Info;
