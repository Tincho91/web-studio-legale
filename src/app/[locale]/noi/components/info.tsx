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
                alt="Maria Agovino"
              />
            </FadeInFrom>
            <FadeInFrom direction="left" id="mariaAgo">
              <div className="py-5">
                <h2 className="text-3xl font-bold font-ruda">Maria Agovino</h2>
                <p className="text-base font-roboto">
                  Avvocato dal 2001, con 27 anni di esperienza nel mercato legale locale. Perito legale presso il Tribunale di Milano.
                </p>
              </div>
            </FadeInFrom>
            <div className="relative py-5 px-4 mx-[-16px] bg-[#090D1D]">
              <div className="relative z-10">
                <p className="text-white font-roboto">
                  Lo studio legale ha attraversato una fase di crescita costante e, per oltre 20 anni, ha fornito consulenza legale e assistenza giudiziaria. Con una reputazione impeccabile, un approccio cordiale e professionale, oggi si impegna a sfruttare le opportunità digitali, senza perdere la propria empatia e la vocazione a offrire soluzioni legali efficaci e pragmatiche.
                </p>
              </div>
            </div>
            <div className="bg-white py-5">
              <FadeInFrom direction="right" id="mauraMon">
                <h2 className="text-3xl font-bold font-ruda text-right">Maura Monteforte</h2>
              </FadeInFrom>
              <FadeInFrom direction="right" id="mauraMon">
                <p className="text-base font-roboto text-right">
                  Al nostro team si è unita una cara amica della casa. Lei segue i nostri principi fondamentali: Comunicazione, Disponibilità, Competenza. Requisiti essenziali per fornire un&apos;assistenza legale sicura ed efficace.
                </p>
              </FadeInFrom>
            </div>
            <FadeInFrom direction="right" id="mauraMon">
              <div className="flex justify-end w-full">
                <img
                  src="/images/team1-2.jpg"
                  className="h-[250px] object-cover"
                  alt="Maura Monteforte"
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
                    alt="Maria Agovino"
                  />
                </div>
                <div className="bg-[#ECF0FF] my-auto ml-[-5%] p-10">
                  <h2 className="py-3 text-3xl sm:text-4xl lg:text-5xl font-bold font-ruda">
                    Maria Agovino
                  </h2>
                  <p className="text-base sm:text-lg font-roboto">
                    Avvocato dal 2001, con 27 anni di esperienza nel mercato legale locale. Perito legale presso il Tribunale di Milano.
                  </p>
                </div>
              </div>
            </FadeInFrom>
            <div className="bg-[#090D1D] my-[-5%] w-3/4 p-10 mx-auto">
              <p className="text-white font-roboto">
                Lo studio legale ha attraversato una fase di crescita costante e, per oltre 20 anni, ha fornito consulenza legale e assistenza giudiziaria. Con una reputazione impeccabile, un approccio cordiale e professionale, oggi si impegna a sfruttare le opportunità digitali, senza perdere la propria empatia e la vocazione a offrire soluzioni legali efficaci e pragmatiche.
              </p>
            </div>
            <FadeInFrom direction="right" id="mauraMon">
              <div className="flex">
                <div className="bg-[#ECF0FF] my-auto mr-[-5%] p-10 z-10">
                  <h2 className="py-3 text-3xl sm:text-4xl lg:text-5xl font-bold font-ruda">
                    Maura Monteforte
                  </h2>
                  <p className="text-base sm:text-lg font-roboto">
                    Al nostro team si è unita una cara amica della casa. Lei segue i nostri principi fondamentali: Comunicazione, Disponibilità, Competenza. Requisiti essenziali per fornire un&apos;assistenza legale sicura ed efficace.
                  </p>
                </div>
                <div className="w-full max-w-[250px]">
                  <img
                    src="/images/team1-2.jpg"
                    className="h-[400px] object-cover"
                    alt="Maura Monteforte"
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