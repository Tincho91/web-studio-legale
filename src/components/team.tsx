import { useTranslations } from 'next-intl';
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import FadeInFrom from "./animations/fadeInFrom";

const Team = () => {
  const t = useTranslations('Team');

  return (
    <div className="relative py-8 bg-[#ECF0FF] sm:pt-4">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="relative flex flex-col">
          <img
            src="/images/team1.jpg"
            alt="Team"
            className="object-cover object-top min-h-[280px] max-h-[75vh] sm:mt-4 "
          />
          <div className="relative md:absolute right-0 bottom-0 max-w-none md:max-w-xs mt-4 sm:mt-0 flex flex-col space-y-2 align-start sm:bg-[#ECF0FF] mb-3 md:mb-0">
            <FadeInFrom direction="right" id="teamText">
              <h2 className="font-ruda text-4xl md:text-5xl pt-3 sm:pt-3 sm:pl-3 sm:pr-3">
                {t('title')}
              </h2>
              <p className="font-roboto text-[#090D1DCC] text-base pt-3 sm:pt-3 sm:pl-3 sm:pr-3 pb-5">
                {t('description')}
              </p>
            </FadeInFrom>
            <Link href={`/${t('locale')}/noi`} className="w-full no-underline block">
              <div className="font-roboto text-base font-light tracking-widest bg-[#090D1D] z-10 py-5 text-white">
                <div className="flex items-center gap-2 justify-center">
                  <AiOutlinePlus size="16px" />
                  <span>{t('details')}</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;