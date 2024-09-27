import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

interface LocaleSwitcherProps {}

interface LocaleData {
  [key: string]: {
    label: string;
    imgSrc: string;
    alt: string;
  };
}

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const localeData: LocaleData = {
    en: { label: 'English', imgSrc: '/images/estados-unidos.png', alt: 'United States' },
    it: { label: 'Italiano', imgSrc: '/images/italia.png', alt: 'Italia' },
    es: { label: 'Español', imgSrc: '/images/espana.png', alt: 'España' },
    pt: { label: 'Português', imgSrc: '/images/portugal.png', alt: 'Portugal' },
  };

  const handleLocaleChange = (nextLocale: string) => {
    if (isMounted) {
      router.push(`/${nextLocale}`);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 gap-4 mt-10 sm:grid-cols-2 md:grid-cols-4 sm:gap-4">
      {Object.keys(localeData).map((loc: string) => {
        const { label, imgSrc, alt } = localeData[loc];
        const isActive = loc === locale;
        return (
          <button
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={`cursor-pointer ${isActive ? 'font-bold' : ''}`}
          >
            <div className="flex flex-col items-center">
              <img src={imgSrc} alt={alt} className="w-12 h-12 mb-2" />
              <span className="text-base">{label}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default LocaleSwitcher;
