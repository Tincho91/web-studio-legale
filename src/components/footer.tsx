"use client";

import { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isCookiesOpen, setIsCookiesOpen] = useState(false);

  const openPrivacyModal = () => {
    setIsPrivacyOpen(true);
  };

  const closePrivacyModal = () => {
    setIsPrivacyOpen(false);
  };

  const openCookiesModal = () => {
    setIsCookiesOpen(true);
  };

  const closeCookiesModal = () => {
    setIsCookiesOpen(false);
  };

  return (
    <footer className="bg-[#090D1D] text-white pt-8 pb-5">
      <div className="mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col sm:flex-row sm:justify-between w-full">
          {/* Address and Contact */}
          <div className="flex flex-col justify-start items-start text-left sm:w-1/2 mb-5 sm:mb-0">
            <p className="font-bold">Sede di Cosenza</p>
            <p className="font-bold">87100 - Piazza Gullo, 5</p>
            <p className="font-bold">Email: studiolegaleagovinomonteforte@gmail.com </p>
          </div>

          {/* Policy Links and Social Links */}
          <div className="flex flex-col justify-start sm:justify-end items-end sm:w-1/2">
            {/* Privacy and Cookie Policy Links */}
            <div className="flex items-center">
              <a href="#" className="text-blue-400" onClick={openPrivacyModal}>
                Privacy Policy
              </a>
              <span className="mx-2 text-gray-400">/</span>
              <a href="#" className="text-blue-400" onClick={openCookiesModal}>
                Cookie Policy
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 mt-5 sm:mt-3">
              <a href="mailto:studiolegaleagovinomonteforte@gmail.com" target="_blank" className="text-white">
                <FaEnvelope size="2em" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=393355388666" target="_blank" className="text-white">
                <FaWhatsapp size="2em" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" className="text-white">
                <FaLinkedin size="2em" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Branding */}
        <div className="w-full text-center mt-10 text-sm">
          <p>
            Designed by <span className="italic font-bold">Neomedi Analytica Srls</span>
          </p>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 flex justify-center items-center">
          <div className="relative bg-white p-4 md:p-8 max-w-3xl w-full">
            <button
              className="absolute top-[4%] left-[0.4%] text-gray-600 hover:text-gray-800 border border-black py-1 px-2"
              onClick={closePrivacyModal}
            >
              ✕
            </button>
            <h2 className="text-xl md:text-2xl font-bold mb-4">Privacy Policy</h2>
            <div className="privacy-policy text-black overflow-y-auto max-h-screen p-5">
              <div className="mb-10">
                <img src="/images/italia.png" alt="Italian Flag" className="h-6 w-6 mr-2" />
                <h1 className="pb-5 text-xl">Studio Legale Agovino Monteforte Privacy Policy</h1>
                <p className="pb-5 text-sm">
                  Ai sensi dell&apos;art. 13 del d. lgs. n. 196 del 30 giugno 2003, la presente informativa descrive le modalità con cui lo Studio Legale Agovino Monteforte tratta i dati personali degli utenti in relazione all&apos;utilizzo del sito <a href="http://www.studiolegaleagovinomonteforte.com">www.studiolegaleagovinomonteforte.com</a>.
                </p>
                <h2 className="pb-5 text-sm">Titolare del trattamento</h2>
                <p className="pb-5 text-sm">
                  Il titolare del trattamento dei dati personali relativi al Sito è l&apos;Avv. Maura Monteforte.
                </p>
                <h2 className="pb-5 text-sm">Categorie, natura e finalità dei dati trattati</h2>
                <p className="pb-5 text-sm">
                  Lo Studio Legale tratterà parte dei dati personali degli utenti che interagiscono con i servizi web del Sito.
                </p>
                <h3 className="pb-5 text-sm">Dati di navigazione</h3>
                <p className="pb-5 text-sm">
                  Si tratta di dati di navigazione che i sistemi informatici acquisiscono automaticamente durante l&apos;utilizzo del Sito, quale l&apos;indirizzo IP, gli indirizzi in notazione URI (Uniform Resource Identifier), nonchè i dettagli delle richieste inviate al server del Sito, e che ne rendono possibile la navigazione. I dati di navigazione potranno altresì essere utilizzati per compilare statistiche anonime che permettono di comprendere l&apos;utilizzo del Sito e di migliorare la struttura dello stesso.
                </p>
                <p className="pb-5 text-sm">
                  Infine, i dati di navigazione potranno eventualmente essere utilizzati per l&apos;accertamento di attività illecite, come in casi di reati informatici, a danno del Sito.
                </p>
                <h3 className="pb-5 text-sm">Dati forniti dall&apos;utente</h3>
                <p className="pb-5 text-sm">
                  L&apos;eventuale invio di comunicazioni ai contatti indicati sul Sito comporta l&apos;acquisizione dell&apos;indirizzo e-mail e degli ulteriori dati personali contenuti nella comunicazione.
                </p>
              </div>

              {/* Español */}
              <div className="mb-10">
                <img src="/images/espana.png" alt="Bandera España" className="h-6 w-6 mr-2" />
                <h1 className="pb-5 text-xl">Política de Privacidad de Studio Legale Agovino Monteforte</h1>
                <p className="pb-5 text-sm">
                  Según el art. 13 del Decreto Legislativo n. 196 del 30 de junio de 2003, esta información describe cómo el Studio Legale Agovino Monteforte trata los datos personales de los usuarios en relación con el uso del sitio <a href="http://www.studiolegaleagovinomonteforte.com">www.studiolegaleagovinomonteforte.com</a>.
                </p>
                <h2 className="pb-5 text-sm">Responsable del tratamiento</h2>
                <p className="pb-5 text-sm">
                  El responsable del tratamiento de los datos personales relacionados con el Sitio es la abogada Maura Monteforte.
                </p>
                <h2 className="pb-5 text-sm">Categorías, naturaleza y finalidad de los datos tratados</h2>
                <p className="pb-5 text-sm">
                  El Studio Legale tratará algunos de los datos personales de los usuarios que interactúan con los servicios web del Sitio.
                </p>
                <h3 className="pb-5 text-sm">Datos de navegación</h3>
                <p className="pb-5 text-sm">
                  Se trata de datos de navegación que los sistemas informáticos adquieren automáticamente durante el uso del Sitio, como la dirección IP, las direcciones en notación URI (Uniform Resource Identifier), así como los detalles de las solicitudes enviadas al servidor del Sitio, que hacen posible la navegación. Los datos de navegación también se podrán utilizar para compilar estadísticas anónimas que permitan comprender el uso del Sitio y mejorar su estructura.
                </p>
                <p className="pb-5 text-sm">
                  Finalmente, los datos de navegación podrán eventualmente ser utilizados para detectar actividades ilícitas, como en casos de delitos informáticos, en perjuicio del Sitio.
                </p>
                <h3 className="pb-5 text-sm">Datos proporcionados por el usuario</h3>
                <p className="pb-5 text-sm">
                  El eventual envío de comunicaciones a los contactos indicados en el Sitio implica la adquisición de la dirección de correo electrónico y otros datos personales contenidos en la comunicación.
                </p>
              </div>

              {/* Português */}
              <div className="mb-10">
                <img src="/images/portugal.png" alt="Bandera Portugal" className="h-6 w-6 mr-2" />
                <h1 className="pb-5 text-xl">Política de Privacidade do Studio Legale Agovino Monteforte</h1>
                <p className="pb-5 text-sm">
                  De acordo com o art. 13 do Decreto Legislativo n. 196 de 30 de junho de 2003, esta informação descreve como o Studio Legale Agovino Monteforte trata os dados pessoais dos usuários em relação ao uso do site <a href="http://www.studiolegaleagovinomonteforte.com">www.studiolegaleagovinomonteforte.com</a>.
                </p>
                <h2 className="pb-5 text-sm">Responsável pelo tratamento</h2>
                <p className="pb-5 text-sm">
                  O responsável pelo tratamento dos dados pessoais relacionados ao Site é a advogada Maura Monteforte.
                </p>
                <h2 className="pb-5 text-sm">Categorias, natureza e finalidade dos dados tratados</h2>
                <p className="pb-5 text-sm">
                  O Studio Legale tratará alguns dos dados pessoais dos usuários que interagem com os serviços web do Site.
                </p>
                <h3 className="pb-5 text-sm">Dados de navegação</h3>
                <p className="pb-5 text-sm">
                  Trata-se de dados de navegação que os sistemas informáticos adquirem automaticamente durante o uso do Site, como o endereço IP, endereços em notação URI (Uniform Resource Identifier), bem como os detalhes das solicitações enviadas ao servidor do Site, que tornam possível a navegação. Os dados de navegação também poderão ser utilizados para compilar estatísticas anônimas que permitem compreender o uso do Site e melhorar sua estrutura.
                </p>
                <p className="pb-5 text-sm">
                  Por fim, os dados de navegação poderão eventualmente ser utilizados para identificar atividades ilícitas, como em casos de crimes informáticos, em detrimento do Site.
                </p>
                <h3 className="pb-5 text-sm">Dados fornecidos pelo usuário</h3>
                <p className="pb-5 text-sm">
                  O eventual envio de comunicações aos contatos indicados no Site implica a aquisição do endereço de e-mail e outros dados pessoais contidos na comunicação.
                </p>
              </div>

              {/* English */}
              <div className="mb-10">
                <img src="/images/estados-unidos.png" alt="Bandera United States" className="h-6 w-6 mr-2" />
                <h1 className="pb-5 text-xl">Studio Legale Agovino Monteforte Privacy Policy</h1>
                <p className="pb-5 text-sm">
                  Pursuant to art. 13 of Legislative Decree No. 196 of June 30, 2003, this information describes how the Studio Legale Agovino Monteforte processes the personal data of users in relation to the use of the website <a href="http://www.studiolegaleagovinomonteforte.com">www.studiolegaleagovinomonteforte.com</a>.
                </p>
                <h2 className="pb-5 text-sm">Data Controller</h2>
                <p className="pb-5 text-sm">
                  The data controller of the personal data related to the Site is Avv. Maura Monteforte.
                </p>
                <h2 className="pb-5 text-sm">Categories, nature, and purposes of the data processed</h2>
                <p className="pb-5 text-sm">
                  The Studio Legale will process some of the personal data of users who interact with the Site&apos;s web services.
                </p>
                <h3 className="pb-5 text-sm">Navigation data</h3>
                <p className="pb-5 text-sm">
                  This includes navigation data that computer systems automatically acquire during the use of the Site, such as the IP address, addresses in URI (Uniform Resource Identifier) notation, as well as details of the requests sent to the Site&apos;s server, which make navigation possible. Navigation data may also be used to compile anonymous statistics that help understand the use of the Site and improve its structure.
                </p>
                <p className="pb-5 text-sm">
                  Finally, navigation data may eventually be used to ascertain unlawful activities, such as in cases of cyber crimes, detrimental to the Site.
                </p>
                <h3 className="pb-5 text-sm">Data provided by the user</h3>
                <p className="pb-5 text-sm">
                  Any communication sent to the contacts indicated on the Site will result in the acquisition of the email address and any other personal data contained in the communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Policy Modal */}
      {isCookiesOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-75 flex justify-center items-center">
          <div className="relative bg-white p-4 md:p-8 max-w-3xl w-full">
            <button
              className="absolute top-[4%] left-[0.4%] text-gray-600 hover:text-gray-800 border border-black py-1 px-2"
              onClick={closeCookiesModal}
            >
              ✕
            </button>
            <h2 className="text-xl md:text-2xl font-bold mb-4">Cookie Policy</h2>
            <div className="privacy-policy text-black overflow-y-auto max-h-screen p-5">
              <div className="mb-10">
                <img src="/images/italia.png" alt="Italian Flag" className="h-6 w-6 mr-2" />
                <div className="flex items-center pb-5">
                  <h1 className="text-xl">Studio Legale Agovino Monteforte Cookie Policy</h1>
                </div>
                <p className="pb-5 text-sm">
                  Il Sito potrà utilizzare alcune tipologie di cookie. In particolare, il Sito utilizza cookie di sessione, la cui funzione è limitata alla trasmissione di dati identificativi di sessione necessari ai fini di garantire una navigazione efficiente. Altre tipologie di cookie, o tecnologie analoghe, potranno essere di volta in volta impiegate per consentire l&apos;uso del Sito o di specifiche funzionalità. Possono essere utilizzati alcuni cookie persistenti al fine di tracciare la lingua utilizzata dal sistema informatico dell&apos;utente, che potranno comunque essere disattivati in ogni momento. Non sono invece impiegati cookie per l&apos;acquisizione e la trasmissione di dati identificativi personali degli utenti né tracking cookie. Per i dati di sessione e per i dati strettamente necessari al funzionamento del Sito, il conferimento è necessario e non richiede il consenso degli utenti. Il mancato conferimento di questi dati potrà eventualmente comportare l&apos;impossibilità di navigare sul Sito. Per ulteriori informazioni sulla disattivazione e il settaggio dei cookie, gli utenti possono consultare la sezione “Help” del proprio browser o seguire le procedure appositamente previste da quest&apos;ultimo.
                </p>
                <h2 className="pb-5 text-sm">Natura facoltativa del conferimento dei dati</h2>
                <p className="pb-5 text-sm">
                  Fermo restando quanto indicato in relazione ai dati di navigazione e ai cookie, gli utenti sono liberi di fornire dati personali con lo Studio Legale. Il loro mancato conferimento può comportare l&apos;impossibilità di ricevere risposte.
                </p>
                <h2 className="pb-5 text-sm">Modalità del trattamento</h2>
                <p className="pb-5 text-sm">
                  I dati personali sono trattati con strumenti automatizzati, con logiche strettamente correlate alle finalità stesse, e per il periodo di tempo strettamente necessario a conseguire gli scopi per cui sono stati raccolti. Le informazioni raccolte sono registrate in un ambiente sicuro.
                </p>
                <h2 className="pb-5 text-sm">Ambito di comunicazione dei dati</h2>
                <p className="pb-5 text-sm">
                  I dati personali saranno trattati dal titolare del trattamento ed eventualmente dai suoi collaboratori. I dati personali potranno inoltre essere trattati da terzi, fornitori di servizi esterni (per es., assistenza tecnica), che agiscano per conto o a nome dello Studio, debitamente nominati quali Responsabili del trattamento, e che tratteranno i dati in conformità allo scopo per cui i dati sono stati in origine raccolti.
                </p>
                <h2 className="pb-5 text-sm">Diffusione dei dati</h2>
                <p className="pb-5 text-sm">
                  I dati personali non sono soggetti a diffusione.
                </p>
                <h2 className="pb-5 text-sm">Diritti dell&apos;interessato</h2>
                <p className="pb-5 text-sm">
                  La legge conferisce agli interessati l&apos;esercizio di specifici diritti.
                  In particolare, in ogni momento, l&apos;interessato può ottenere:
                </p>
                <ul className="list-disc list-inside pb-5 text-sm">
                  <li>
                    la conferma dell&apos;esistenza o meno di dati personali che lo riguardano, anche se non ancora registrati, e la loro comunicazione in forma intelligibile;
                  </li>
                  <li>
                    l&apos;indicazione dell&apos;origine dei dati personali, delle finalità e modalità del trattamento nonché della logica applicata in caso di trattamento effettuato con l&apos;ausilio di strumenti elettronici;
                  </li>
                  <li>
                    l&apos;indicazione degli estremi identificativi del titolare e dei responsabili nonché dei soggetti o delle categorie di soggetti ai quali i dati personali possono essere comunicati o che possono venirne a conoscenza;
                  </li>
                  <li>
                    l&apos;aggiornamento, la rettificazione, l&apos;integrazione dei dati, nonché la cancellazione, la trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge, compresi quelli di cui non è necessaria la conservazione in relazione agli scopi per i quali i dati sono stati raccolti o successivamente trattati;
                  </li>
                  <li>
                    l&apos;attestazione che le operazioni di cui alla lettera d) sono state portate a conoscenza, anche per quanto riguarda il loro contenuto, di coloro ai quali i dati sono stati comunicati o diffusi, eccettuato il caso in cui tale adempimento si rivela impossibile o comporta un impiego di mezzi manifestamente sproporzionato rispetto al diritto tutelato.
                  </li>
                </ul>
                <p className="pb-5 text-sm">
                  L&apos;interessato, ai sensi dell&apos;art. 7 del Codice Privacy, ha diritto altresì di opporsi, per motivi legittimi, al trattamento dei dati personali, anche se pertinenti allo scopo della raccolta, nonché al trattamento di dati personali a fini di invio di comunicazioni promozionali per il compimento di ricerche di mercato. Tutti questi diritti possono essere esercitati scrivendo alla mail dello Studio legale.
                  La presente Privacy Policy potrà essere soggetta a periodici aggiornamenti.
                </p>

                {/* Traducción al inglés */}
                <div className="pb-5">
                  <img src="/images/estados-unidos.png" alt="Bandera United States" className="h-6 w-6 mr-2" />
                  <h1 className="pb-5 text-xl">Studio Legale Agovino Monteforte Cookie Policy</h1>
                  <p className="pb-5 text-sm">
                    The Site may use certain types of cookies. In particular, the Site uses session cookies, whose function is limited to the transmission of session identification data necessary to ensure efficient navigation. Other types of cookies, or similar technologies, may be used from time to time to enable the use of the Site or specific features. Some persistent cookies may be used to track the language used by the user&apos;s computer system, which can be disabled at any time. Cookies are not used for the acquisition and transmission of personal identification data of users or tracking cookies. For session data and data strictly necessary for the operation of the Site, provision is necessary and does not require users&apos; consent. Failure to provide such data may make it impossible to browse the Site. For further information on disabling and setting cookies, users can consult the &quot;Help&quot; section of their browser or follow the procedures provided by the browser.
                  </p>
                  <h2 className="pb-5 text-sm">Optional Nature of Data Provision</h2>
                  <p className="pb-5 text-sm">
                    Without prejudice to what has been indicated regarding navigation data and cookies, users are free to provide personal data to the Law Firm. Failure to provide such data may make it impossible to receive responses.
                  </p>
                  <h2 className="pb-5 text-sm">Data Processing Methods</h2>
                  <p className="pb-5 text-sm">
                    Personal data are processed using automated tools, with logic strictly related to the purposes themselves, and for the period of time strictly necessary to achieve the purposes for which they were collected. The information collected is recorded in a secure environment.
                  </p>
                  <h2 className="pb-5 text-sm">Data Communication Scope</h2>
                  <p className="pb-5 text-sm">
                    Personal data will be processed by the data controller and possibly by its collaborators. Personal data may also be processed by third parties, external service providers (e.g., technical assistance), acting on behalf or in the name of the Firm, duly appointed as Data Processors, and will process the data in accordance with the purpose for which the data were originally collected.
                  </p>
                  <h2 className="pb-5 text-sm">Data Dissemination</h2>
                  <p className="pb-5 text-sm">
                    Personal data are not subject to dissemination.
                  </p>
                  <h2 className="pb-5 text-sm">Rights of the Data Subject</h2>
                  <p className="pb-5 text-sm">
                    The law grants the data subjects the exercise of specific rights.
                    In particular, at any time, the data subject may obtain:
                  </p>
                  <ul className="list-disc list-inside pb-5 text-sm">
                    <li>
                      confirmation of the existence or non-existence of personal data concerning them, even if not yet registered, and their communication in an intelligible form;
                    </li>
                    <li>
                      indication of the origin of personal data, the purposes and methods of processing, as well as the logic applied in the event of processing carried out with the aid of electronic instruments;
                    </li>
                    <li>
                      indication of the identifying details of the data controller and the processors, as well as the subjects or categories of subjects to whom the personal data may be communicated or who may become aware of them;
                    </li>
                    <li>
                      the updating, rectification, integration of the data, as well as the cancellation, transformation into anonymous form, or blocking of data processed unlawfully, including data whose retention is unnecessary for the purposes for which the data were collected or subsequently processed;
                    </li>
                    <li>
                      certification that the operations referred to in letter d) have been brought to the attention, also regarding their content, of those to whom the data have been communicated or disseminated, except where such fulfillment proves impossible or involves a manifestly disproportionate use of means compared to the right protected.
                    </li>
                  </ul>
                  <p className="pb-5 text-sm">
                    The data subject, pursuant to Art. 7 of the Privacy Code, also has the right to object, on legitimate grounds, to the processing of personal data, even if relevant to the purpose of collection, as well as to the processing of personal data for the purpose of sending promotional communications for the performance of market research. All these rights may be exercised by writing to the Law Firm&apos;s email. This Privacy Policy may be subject to periodic updates.
                  </p>
                </div>

                {/* Traducción al español */}
                <div className="pb-5">
                  <img src="/images/espana.png" alt="Bandera España" className="h-6 w-6 mr-2" />
                  <h1 className="pb-5 text-xl">Studio Legale Agovino Monteforte Política de Cookies</h1>
                  <p className="pb-5 text-sm">
                    El Sitio puede utilizar ciertos tipos de cookies. En particular, el Sitio utiliza cookies de sesión, cuya función se limita a la transmisión de datos de identificación de sesión necesarios para garantizar una navegación eficiente. De vez en cuando, se pueden utilizar otros tipos de cookies, o tecnologías similares, para permitir el uso del Sitio o de características específicas. Se pueden utilizar algunas cookies persistentes para rastrear el idioma utilizado por el sistema informático del usuario, las cuales se pueden desactivar en cualquier momento. No se utilizan cookies para la adquisición y transmisión de datos de identificación personal de los usuarios ni cookies de seguimiento. Para los datos de sesión y los datos estrictamente necesarios para el funcionamiento del Sitio, el suministro es necesario y no requiere el consentimiento de los usuarios. La falta de suministro de estos datos puede hacer que sea imposible navegar por el Sitio. Para obtener más información sobre la desactivación y configuración de cookies, los usuarios pueden consultar la sección &quot;Ayuda&quot; de su navegador o seguir los procedimientos previstos por el navegador.
                  </p>
                  <h2 className="pb-5 text-sm">Carácter opcional de la provisión de datos</h2>
                  <p className="pb-5 text-sm">
                    Sin perjuicio de lo indicado con respecto a los datos de navegación y las cookies, los usuarios son libres de proporcionar datos personales al Estudio Jurídico. La falta de suministro de dichos datos puede hacer que sea imposible recibir respuestas.
                  </p>
                  <h2 className="pb-5 text-sm">Métodos de procesamiento de datos</h2>
                  <p className="pb-5 text-sm">
                    Los datos personales se procesan mediante herramientas automatizadas, con lógica estrictamente relacionada con los propios fines, y durante el tiempo estrictamente necesario para alcanzar los fines para los que fueron recopilados. La información recopilada se registra en un entorno seguro.
                  </p>
                  <h2 className="pb-5 text-sm">Ámbito de comunicación de los datos</h2>
                  <p className="pb-5 text-sm">
                    Los datos personales serán tratados por el titular del tratamiento y, en su caso, por sus colaboradores. Los datos personales también pueden ser tratados por terceros, proveedores de servicios externos (por ejemplo, asistencia técnica), que actúen en nombre o por cuenta del Estudio, debidamente designados como Responsables del tratamiento, y que tratarán los datos de conformidad con el propósito para el que se recopilaron originalmente los datos.
                  </p>
                  <h2 className="pb-5 text-sm">Difusión de los datos</h2>
                  <p className="pb-5 text-sm">
                    Los datos personales no están sujetos a difusión.
                  </p>
                  <h2 className="pb-5 text-sm">Derechos del interesado</h2>
                  <p className="pb-5 text-sm">
                    La ley otorga a los interesados el ejercicio de derechos específicos.
                    En particular, en cualquier momento, el interesado puede obtener:
                  </p>
                  <ul className="list-disc list-inside pb-5 text-sm">
                    <li>
                      la confirmación de la existencia o no de datos personales que le conciernan, incluso si aún no están registrados, y su comunicación de forma inteligible;
                    </li>
                    <li>
                      la indicación del origen de los datos personales, de los fines y métodos de tratamiento, así como de la lógica aplicada en caso de tratamiento realizado con la ayuda de instrumentos electrónicos;
                    </li>
                    <li>
                      la indicación de los datos identificativos del titular y de los responsables, así como de los sujetos o categorías de sujetos a los que se puedan comunicar los datos personales o que puedan conocerlos;
                    </li>
                    <li>
                      la actualización, rectificación, integración de los datos, así como la cancelación, transformación en forma anónima o el bloqueo de datos tratados en violación de la ley, incluidos aquellos que no sean necesarios para su conservación en relación con los fines para los que se recopilaron o procesaron posteriormente;
                    </li>
                    <li>
                      la certificación de que las operaciones mencionadas en la letra d) se han puesto en conocimiento, también en cuanto a su contenido, de aquellos a quienes se han comunicado o difundido los datos, excepto en el caso de que dicho cumplimiento resulte imposible o implique un uso de medios manifiestamente desproporcionado con respecto al derecho protegido.
                    </li>
                  </ul>
                  <p className="pb-5 text-sm">
                    El interesado, de conformidad con el art. 7 del Código de Privacidad, también tiene derecho a oponerse, por motivos legítimos, al tratamiento de datos personales, incluso si son pertinentes para el propósito de la recopilación, así como al tratamiento de datos personales con el fin de enviar comunicaciones promocionales para la realización de estudios de mercado. Todos estos derechos pueden ejercerse escribiendo al correo electrónico del Estudio Jurídico. Esta Política de Privacidad puede estar sujeta a actualizaciones periódicas.
                  </p>
                </div>

                {/* Traducción al francés */}
                <div className="pb-5">
                  <img src="/images/portugal.png" alt="Bandera Portugal" className="h-6 w-6 mr-2" />
                  <h1 className="pb-5 text-xl">Studio Legale Agovino Monteforte Política de Cookies</h1>
                  <p className="pb-5 text-sm">
                    O Site pode usar certos tipos de cookies. Em particular, o Site usa cookies de sessão, cuja função se limita à transmissão de dados de identificação de sessão necessários para garantir uma navegação eficiente. Outros tipos de cookies, ou tecnologias semelhantes, podem ser usados de tempos em tempos para permitir o uso do Site ou de funcionalidades específicas. Alguns cookies persistentes podem ser usados para rastrear o idioma usado pelo sistema do usuário, que podem ser desativados a qualquer momento. Os cookies não são usados para a aquisição e transmissão de dados de identificação pessoal dos usuários nem para cookies de rastreamento. Para dados de sessão e dados estritamente necessários para o funcionamento do Site, o fornecimento é necessário e não requer o consentimento dos usuários. A falta de fornecimento desses dados pode tornar impossível a navegação no Site. Para mais informações sobre a desativação e configuração de cookies, os usuários podem consultar a seção &quot;Ajuda&quot; do navegador ou seguir os procedimentos previstos pelo navegador.
                  </p>
                  <h2 className="pb-5 text-sm">Natureza opcional do fornecimento de dados</h2>
                  <p className="pb-5 text-sm">
                    Sem prejuízo do que foi indicado em relação aos dados de navegação e cookies, os usuários são livres para fornecer dados pessoais ao Escritório de Advocacia. A falta de fornecimento desses dados pode impossibilitar o recebimento de respostas.
                  </p>
                  <h2 className="pb-5 text-sm">Métodos de tratamento de dados</h2>
                  <p className="pb-5 text-sm">
                    Os dados pessoais são tratados por meio de ferramentas automatizadas, com lógica estritamente relacionada aos próprios fins, e pelo tempo estritamente necessário para atingir os fins para os quais foram coletados. As informações coletadas são registradas em um ambiente seguro.
                  </p>
                  <h2 className="pb-5 text-sm">Campo de comunicação dos dados</h2>
                  <p className="pb-5 text-sm">
                    Os dados pessoais serão tratados pelo titular do tratamento e, eventualmente, por seus colaboradores. Os dados pessoais também podem ser tratados por terceiros, prestadores de serviços externos (por exemplo, assistência técnica), que atuem em nome ou por conta do Escritório, devidamente designados como Responsáveis pelo Tratamento, e tratarão os dados de acordo com o propósito para o qual os dados foram originalmente coletados.
                  </p>
                  <h2 className="pb-5 text-sm">Divulgação dos dados</h2>
                  <p className="pb-5 text-sm">
                    Os dados pessoais não estão sujeitos a divulgação.
                  </p>
                  <h2 className="pb-5 text-sm">Direitos do titular dos dados</h2>
                  <p className="pb-5 text-sm">
                    A lei concede aos titulares de dados o exercício de direitos específicos. Em particular, a qualquer momento, o titular pode obter:
                  </p>
                  <ul className="list-disc list-inside pb-5 text-sm">
                    <li>
                      a confirmação da existência ou não de dados pessoais que lhe digam respeito, mesmo que ainda não estejam registrados, e sua comunicação de forma inteligível;
                    </li>
                    <li>
                      a indicação da origem dos dados pessoais, das finalidades e métodos de tratamento, bem como da lógica aplicada no caso de tratamento efetuado com a ajuda de instrumentos eletrônicos;
                    </li>
                    <li>
                      a indicação dos dados de identificação do titular do tratamento e dos responsáveis, bem como dos sujeitos ou categorias de sujeitos a quem os dados pessoais podem ser comunicados ou que possam tomar conhecimento deles;
                    </li>
                    <li>
                      a atualização, retificação, integração dos dados, bem como a eliminação, transformação em forma anônima ou o bloqueio de dados tratados em violação da lei, incluindo aqueles cuja conservação não seja necessária para os fins para os quais os dados foram coletados ou posteriormente tratados;
                    </li>
                    <li>
                      a certificação de que as operações referidas na letra d) foram levadas ao conhecimento, também em relação ao seu conteúdo, daqueles a quem os dados foram comunicados ou disseminados, exceto no caso em que esse cumprimento se mostre impossível ou envolva o uso de meios manifestamente desproporcionados em relação ao direito protegido.
                    </li>
                  </ul>
                  <p className="pb-5 text-sm">
                    O titular dos dados, nos termos do art. 7 do Código de Privacidade, também tem o direito de se opor, por motivos legítimos, ao tratamento de dados pessoais, mesmo que pertinentes ao propósito da coleta, bem como ao tratamento de dados pessoais para o envio de comunicações promocionais para a realização de pesquisas de mercado. Todos esses direitos podem ser exercidos escrevendo para o e-mail do Escritório de Advocacia. Esta Política de Privacidade pode estar sujeita a atualizações periódicas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;