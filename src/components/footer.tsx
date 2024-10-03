"use client";

import { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Unificado para ambas políticas

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
              <a href="#" className="text-blue-400" onClick={toggleModal}>
                Privacy Policy
              </a>
              <span className="mx-2 text-gray-400">/</span>
              <a href="#" className="text-blue-400" onClick={toggleModal}>
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
              <a href="https://www.linkedin.com/in/mariella-agovino-64aa3147/" target="_blank" className="text-white">
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

      {/* Unified Modal for Privacy and Cookie Policy */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-5 w-full h-full">
            <button onClick={toggleModal} className="mb-4 bg-gray-700 text-white py-2 px-4 rounded">
              X
            </button>
            <div className="privacy-policy text-black overflow-y-auto max-h-screen p-5">
              {/* Italiano */}
              <div className="mb-10">
                <img src="/images/italia.png" alt="Italian Flag" className="h-6 w-6 mr-2" />
                <h1 className="pb-5 text-xl">
                  Studio Legale Agovino Monteforte Politica sulla privacy e sui Cookie
                </h1>
                <p className="pb-5 text-sm">
                  Ai sensi dell’art. 13 del d. lgs. n. 196 del 30 giugno 2003, la presente
                  informativa descrive le modalità con cui lo Studio Legale Agovino Monteforte
                  tratta i dati personali degli utenti in relazione all’utilizzo del sito{' '}
                  <a href="http://www.studiolegaleagovinomonteforte.com">
                    www.studiolegaleagovinomonteforte.com
                  </a>
                  .
                </p>
                <h2 className="pb-5 text-sm">Titolare del trattamento</h2>
                <p className="pb-5 text-sm">
                  Il titolare del trattamento dei dati personali relativi al Sito è l’Avv.
                  Maura Monteforte.
                </p>
                <h2 className="pb-5 text-sm">Categorie, natura e finalità dei dati trattati</h2>
                <p className="pb-5 text-sm">
                  Lo Studio Legale tratterà parte dei dati personali degli utenti che
                  interagiscono con i servizi web del Sito.
                </p>
                <h3 className="pb-5 text-sm">Dati di navigazione</h3>
                <p className="pb-5 text-sm">
                  Si tratta di dati di navigazione che i sistemi informatici acquisiscono
                  automaticamente durante l’utilizzo del Sito, quale l’indirizzo IP, gli
                  indirizzi in notazione URI (Uniform Resource Identifier), nonché i dettagli
                  delle richieste inviate al server del Sito, e che ne rendono possibile la
                  navigazione. I dati di navigazione potranno altresì essere utilizzati per
                  compilare statistiche anonime che permettono di comprendere l’utilizzo del
                  Sito e di migliorare la struttura dello stesso.
                </p>
                <p className="pb-5 text-sm">
                  Infine, i dati di navigazione potranno eventualmente essere utilizzati per
                  l’accertamento di attività illecite, come in casi di reati informatici, a
                  danno del Sito.
                </p>
                <h3 className="pb-5 text-sm">Dati forniti dall’utente</h3>
                <p className="pb-5 text-sm">
                  L’eventuale invio di comunicazioni ai contatti indicati sul Sito comporta
                  l’acquisizione dell’indirizzo e-mail e degli ulteriori dati personali
                  contenuti nella comunicazione.
                </p>
                <h3 className="pb-5 text-sm">Cookie</h3>
                <p className="pb-5 text-sm">
                  Il Sito potrà utilizzare alcune tipologie di cookie. In particolare, il Sito
                  utilizza cookie di sessione, la cui funzione è limitata alla trasmissione di
                  dati identificativi di sessione necessari ai fini di garantire una
                  navigazione efficiente. Altre tipologie di cookie, o tecnologie analoghe,
                  potranno essere di volta in volta impiegate per consentire l’uso del Sito o
                  di specifiche funzionalità. Possono essere utilizzati alcuni cookie
                  persistenti al fine di tracciare la lingua utilizzata dal sistema
                  informatico dell’utente, che potranno comunque essere disattivati in ogni
                  momento. Non sono invece impiegati cookie per l’acquisizione e la
                  trasmissione di dati identificativi personali degli utenti né tracking
                  cookie. Per i dati di sessione e per i dati strettamente necessari al
                  funzionamento del Sito, il conferimento è necessario e non richiede il
                  consenso degli utenti. Il mancato conferimento di questi dati potrà
                  eventualmente comportare l’impossibilità di navigare sul Sito. Per ulteriori
                  informazioni sulla disattivazione e il settaggio dei cookie, gli utenti
                  possono consultare la sezione “Help” del proprio browser o seguire le
                  procedure appositamente previste da quest’ultimo.
                </p>
                <h2 className="pb-5 text-sm">Natura facoltativa del conferimento dei dati</h2>
                <p className="pb-5 text-sm">
                  Fermo restando quanto indicato in relazione ai dati di navigazione e ai
                  cookie, gli utenti sono liberi di fornire dati personali con lo Studio
                  Legale. Il loro mancato conferimento può comportare l’impossibilità di
                  ricevere risposte.
                </p>
                <h2 className="pb-5 text-sm">Modalità del trattamento</h2>
                <p className="pb-5 text-sm">
                  I dati personali sono trattati con strumenti automatizzati, con logiche
                  strettamente correlate alle finalità stesse, e per il periodo di tempo
                  strettamente necessario a conseguire gli scopi per cui sono stati raccolti.
                  Le informazioni raccolte sono registrate in un ambiente sicuro.
                </p>
                <h2 className="pb-5 text-sm">Ambito di comunicazione dei dati</h2>
                <p className="pb-5 text-sm">
                  I dati personali saranno trattati dal titolare del trattamento ed
                  eventualmente dai suoi collaboratori. I dati personali potranno inoltre
                  essere trattati da terzi, fornitori di servizi esterni (per es., assistenza
                  tecnica), che agiscano per conto o a nome dello Studio, debitamente nominati
                  quali Responsabili del trattamento, e che tratteranno i dati in conformità
                  allo scopo per cui i dati sono stati in origine raccolti.
                </p>
                <h2 className="pb-5 text-sm">Diffusione dei dati</h2>
                <p className="pb-5 text-sm">I dati personali non sono soggetti a diffusione.</p>
                <h2 className="pb-5 text-sm">Diritti dell’interessato</h2>
                <p className="pb-5 text-sm">
                  La legge conferisce agli interessati l’esercizio di specifici diritti. In
                  particolare, in ogni momento, l’interessato può ottenere:
                </p>
                <ul className="list-disc list-inside pb-5 text-sm">
                  <li>
                    la conferma dell’esistenza o meno di dati personali che lo riguardano,
                    anche se non ancora registrati, e la loro comunicazione in forma
                    intelligibile;
                  </li>
                  <li>
                    l’indicazione dell’origine dei dati personali, delle finalità e modalità
                    del trattamento nonché della logica applicata in caso di trattamento
                    effettuato con l’ausilio di strumenti elettronici;
                  </li>
                  <li>
                    l’indicazione degli estremi identificativi del titolare e dei responsabili
                    nonché dei soggetti o delle categorie di soggetti ai quali i dati
                    personali possono essere comunicati o che possono venirne a conoscenza;
                  </li>
                  <li>
                    l’aggiornamento, la rettificazione, l’integrazione dei dati, nonché la
                    cancellazione, la trasformazione in forma anonima o il blocco dei dati
                    trattati in violazione di legge, compresi quelli di cui non è necessaria
                    la conservazione in relazione agli scopi per i quali i dati sono stati
                    raccolti o successivamente trattati;
                  </li>
                  <li>
                    l’attestazione che le operazioni di cui alla lettera d) sono state portate
                    a conoscenza, anche per quanto riguarda il loro contenuto, di coloro ai
                    quali i dati sono stati comunicati o diffusi, eccettuato il caso in cui
                    tale adempimento si rivela impossibile o comporta un impiego di mezzi
                    manifestamente sproporzionato rispetto al diritto tutelato.
                  </li>
                </ul>
                <p className="pb-5 text-sm">
                  L’interessato, ai sensi dell’art. 7 del Codice Privacy, ha diritto altresì
                  di opporsi, per motivi legittimi, al trattamento dei dati personali, anche
                  se pertinenti allo scopo della raccolta, nonché al trattamento di dati
                  personali a fini di invio di comunicazioni promozionali per il compimento di
                  ricerche di mercato. Tutti questi diritti possono essere esercitati
                  scrivendo alla mail dello Studio legale. La presente Privacy Policy potrà
                  essere soggetta a periodici aggiornamenti.
                </p>
              </div>

              {/* Español */}
              <div className="mb-10">
                <img src="/images/espana.png" alt="Bandera España" className="h-6 w-6 mr-2" />
                <h1 className="pb-5 text-xl">Política de Privacidad de Studio Legale Agovino Monteforte</h1>
                <p className="pb-5 text-sm">
                  En virtud del art. 13 del Decreto Legislativo n. 196 del 30 de junio de 2003, este aviso describe la manera en que el Estudio Jurídico Agovino Monteforte trata los datos personales de los usuarios en relación con el uso del sitio <a href="http://www.studiolegaleagovinomonteforte.com">www.studiolegaleagovinomonteforte.com</a>.
                </p>
                <h2 className="pb-5 text-sm">Responsable del tratamiento</h2>
                <p className="pb-5 text-sm">
                  El responsable del tratamiento de los datos personales relativos al Sitio es la Abog. Maura Monteforte.
                </p>
                <h2 className="pb-5 text-sm">Categorías, naturaleza y finalidad de los datos tratados</h2>
                <p className="pb-5 text-sm">
                  El Estudio Jurídico tratará parte de los datos personales de los usuarios que interactúan con los servicios web del Sitio.
                </p>
                <h3 className="pb-5 text-sm">Datos de navegación</h3>
                <p className="pb-5 text-sm">
                  Estos son los datos de navegación que los sistemas informáticos adquieren automáticamente durante el uso del Sitio, como la dirección IP, las direcciones en notación URI (Uniform Resource Identifier), así como los detalles de las solicitudes enviadas al servidor del Sitio, y que hacen posible la navegación. Los datos de navegación también se podrán utilizar para recopilar estadísticas anónimas que permiten comprender el uso del Sitio y mejorar su estructura.
                </p>
                <p className="pb-5 text-sm">
                  Finalmente, los datos de navegación se podrán utilizar para detectar actividades ilícitas, como en casos de delitos informáticos, en perjuicio del Sitio.
                </p>
                <h3 className="pb-5 text-sm">Datos proporcionados por el usuario</h3>
                <p className="pb-5 text-sm">
                  El eventual envío de comunicaciones a los contactos indicados en el Sitio implica la adquisición de la dirección de correo electrónico y los demás datos personales contenidos en la comunicación.
                </p>
                <h3 className="pb-5 text-sm">Cookies</h3>
                <p className="pb-5 text-sm">
                  El Sitio podrá utilizar algunos tipos de cookies. En particular, el Sitio utiliza cookies de sesión, cuya función se limita a la transmisión de datos de identificación de sesión necesarios para garantizar una navegación eficiente. Otros tipos de cookies, o tecnologías similares, se podrán utilizar de vez en cuando para permitir el uso del Sitio o de funcionalidades específicas. Algunos cookies persistentes pueden utilizarse para rastrear el idioma utilizado por el sistema informático del usuario, los cuales se podrán desactivar en cualquier momento. No se utilizan cookies para la adquisición y transmisión de datos de identificación personal de los usuarios ni cookies de seguimiento. Para los datos de sesión y los datos estrictamente necesarios para el funcionamiento del Sitio, su suministro es necesario y no requiere el consentimiento de los usuarios. La falta de suministro de estos datos podría implicar la imposibilidad de navegar por el Sitio. Para más información sobre la desactivación y configuración de cookies, los usuarios pueden consultar la sección "Ayuda" de su navegador o seguir los procedimientos específicos previstos por este.
                </p>
                <h2 className="pb-5 text-sm">Naturaleza opcional del suministro de datos</h2>
                <p className="pb-5 text-sm">
                  Con excepción de lo indicado en relación con los datos de navegación y las cookies, los usuarios son libres de proporcionar datos personales al Estudio Jurídico. La falta de suministro de estos datos podría implicar la imposibilidad de recibir respuestas.
                </p>
                <h2 className="pb-5 text-sm">Modalidades del tratamiento</h2>
                <p className="pb-5 text-sm">
                  Los datos personales se tratan con herramientas automatizadas, con lógicas estrechamente relacionadas con los fines mismos, y durante el tiempo estrictamente necesario para cumplir los objetivos para los que fueron recogidos. La información recopilada se registra en un entorno seguro.
                </p>
                <h2 className="pb-5 text-sm">Ámbito de comunicación de los datos</h2>
                <p className="pb-5 text-sm">
                  Los datos personales serán tratados por el responsable del tratamiento y, eventualmente, por sus colaboradores. Los datos personales también podrán ser tratados por terceros, proveedores de servicios externos (por ejemplo, asistencia técnica), que actúen en nombre o por cuenta del Estudio, debidamente nombrados como Responsables del tratamiento, y que tratarán los datos de conformidad con el propósito para el que fueron originalmente recogidos.
                </p>
                <h2 className="pb-5 text-sm">Divulgación de los datos</h2>
                <p className="pb-5 text-sm">
                  Los datos personales no están sujetos a divulgación.
                </p>
                <h2 className="pb-5 text-sm">Derechos del interesado</h2>
                <p className="pb-5 text-sm">
                  La ley otorga a los interesados el ejercicio de derechos específicos. En particular, en cualquier momento, el interesado puede obtener:
                </p>
                <ul className="list-disc list-inside pb-5 text-sm">
                  <li>La confirmación de la existencia o no de datos personales que le conciernen, aunque no estén registrados, y su comunicación en forma inteligible.</li>
                  <li>La indicación del origen de los datos personales, las finalidades y modalidades del tratamiento, así como la lógica aplicada en caso de tratamiento realizado con herramientas electrónicas.</li>
                  <li>La indicación de los detalles de identificación del responsable y los encargados, así como de los sujetos o categorías de sujetos a los que se puedan comunicar los datos personales o que puedan conocerlos.</li>
                  <li>La actualización, rectificación, integración de los datos, así como la eliminación, transformación en forma anónima o el bloqueo de los datos tratados en violación de la ley, incluidos aquellos para los que no es necesaria su conservación en relación con los fines para los que fueron recogidos o tratados posteriormente.</li>
                  <li>La certificación de que las operaciones mencionadas en el punto anterior han sido notificadas, incluso en lo que respecta a su contenido, a aquellos a quienes se comunicaron o divulgaron los datos, salvo en los casos en que esto resulte imposible o implique el uso de medios claramente desproporcionados con respecto al derecho protegido.</li>
                </ul>
                <p className="pb-5 text-sm">
                  El interesado, de acuerdo con el art. 7 del Código de Privacidad, también tiene derecho a oponerse, por motivos legítimos, al tratamiento de los datos personales, incluso si son pertinentes a los fines de la recogida, así como al tratamiento de datos personales con fines de envío de comunicaciones promocionales o para la realización de estudios de mercado. Todos estos derechos pueden ser ejercidos escribiendo al correo electrónico del Estudio Jurídico.
                  Esta Política de Privacidad puede estar sujeta a actualizaciones periódicas.
                </p>
              </div>


              {/* Português */}
              <div className="mb-10">
                <img src="/images/portugal.png" alt="Bandera Portugal" className="h-6 w-6 mr-2" />
                <h1 className="pb-5 text-xl">Política de Privacidade do Studio Legale Agovino Monteforte</h1>
                <p className="pb-5 text-sm">
                  Nos termos do art. 13 do Decreto Legislativo nº 196 de 30 de junho de 2003, este aviso descreve como o Escritório Jurídico Agovino Monteforte trata os dados pessoais dos usuários em relação ao uso do site <a href="http://www.studiolegaleagovinomonteforte.com">www.studiolegaleagovinomonteforte.com</a>.
                </p>
                <h2 className="pb-5 text-sm">Responsável pelo tratamento</h2>
                <p className="pb-5 text-sm">
                  A responsável pelo tratamento dos dados pessoais relativos ao Site é a Advogada Maura Monteforte.
                </p>
                <h2 className="pb-5 text-sm">Categorias, natureza e finalidade dos dados tratados</h2>
                <p className="pb-5 text-sm">
                  O Escritório Jurídico tratará parte dos dados pessoais dos usuários que interagem com os serviços web do Site.
                </p>
                <h3 className="pb-5 text-sm">Dados de navegação</h3>
                <p className="pb-5 text-sm">
                  Estes são os dados de navegação que os sistemas informáticos adquirem automaticamente durante o uso do Site, como o endereço IP, endereços em notação URI (Uniform Resource Identifier), bem como detalhes das solicitações enviadas ao servidor do Site, permitindo a navegação. Os dados de navegação também podem ser utilizados para coletar estatísticas anônimas que permitem entender o uso do Site e melhorar sua estrutura.
                </p>
                <p className="pb-5 text-sm">
                  Por fim, os dados de navegação podem ser usados para detectar atividades ilícitas, como em casos de crimes cibernéticos, em detrimento do Site.
                </p>
                <h3 className="pb-5 text-sm">Dados fornecidos pelo usuário</h3>
                <p className="pb-5 text-sm">
                  O eventual envio de comunicações aos contatos indicados no Site implica a aquisição do endereço de e-mail e outros dados pessoais contidos na comunicação.
                </p>
                <h3 className="pb-5 text-sm">Cookies</h3>
                <p className="pb-5 text-sm">
                  O Site pode utilizar alguns tipos de cookies. Em particular, o Site usa cookies de sessão, cuja função se limita à transmissão de dados de identificação de sessão necessários para garantir uma navegação eficiente. Outros tipos de cookies, ou tecnologias semelhantes, podem ser usados ocasionalmente para permitir o uso do Site ou de funcionalidades específicas. Alguns cookies persistentes podem ser usados para rastrear o idioma utilizado pelo sistema informático do usuário, e estes podem ser desativados a qualquer momento. Não são utilizados cookies para aquisição e transmissão de dados pessoais dos usuários nem cookies de rastreamento. Para dados de sessão e dados estritamente necessários para o funcionamento do Site, seu fornecimento é necessário e não requer o consentimento dos usuários. A falta de fornecimento desses dados pode impedir a navegação no Site. Para mais informações sobre a desativação e configuração de cookies, os usuários podem consultar a seção "Ajuda" do seu navegador ou seguir os procedimentos específicos previstos por ele.
                </p>
                <h2 className="pb-5 text-sm">Natureza opcional do fornecimento de dados</h2>
                <p className="pb-5 text-sm">
                  Com exceção do indicado em relação aos dados de navegação e cookies, os usuários são livres para fornecer dados pessoais ao Escritório Jurídico. A falta de fornecimento desses dados pode impedir o recebimento de respostas.
                </p>
                <h2 className="pb-5 text-sm">Modos de tratamento</h2>
                <p className="pb-5 text-sm">
                  Os dados pessoais são tratados com ferramentas automatizadas, com lógica estritamente relacionada aos fins pretendidos, e pelo tempo estritamente necessário para cumprir os objetivos para os quais foram coletados. As informações coletadas são registradas em um ambiente seguro.
                </p>
                <h2 className="pb-5 text-sm">Âmbito de comunicação dos dados</h2>
                <p className="pb-5 text-sm">
                  Os dados pessoais serão tratados pelo responsável pelo tratamento e, eventualmente, por seus colaboradores. Os dados pessoais também podem ser tratados por terceiros, prestadores de serviços externos (por exemplo, assistência técnica), que atuem em nome ou por conta do Escritório, devidamente nomeados como Responsáveis pelo tratamento, e que tratarão os dados em conformidade com a finalidade para a qual foram originalmente coletados.
                </p>
                <h2 className="pb-5 text-sm">Divulgação dos dados</h2>
                <p className="pb-5 text-sm">
                  Os dados pessoais não serão divulgados.
                </p>
                <h2 className="pb-5 text-sm">Direitos do titular dos dados</h2>
                <p className="pb-5 text-sm">
                  A lei concede aos titulares dos dados o exercício de direitos específicos. Em particular, a qualquer momento, o titular pode obter:
                </p>
                <ul className="list-disc list-inside pb-5 text-sm">
                  <li>A confirmação da existência ou não de dados pessoais que lhe digam respeito, mesmo que não estejam registrados, e sua comunicação de forma inteligível.</li>
                  <li>A indicação da origem dos dados pessoais, das finalidades e modalidades do tratamento, bem como da lógica aplicada em caso de tratamento realizado com ferramentas eletrônicas.</li>
                  <li>A indicação dos detalhes de identificação do responsável e dos encarregados, bem como dos sujeitos ou categorias de sujeitos a quem os dados pessoais possam ser comunicados ou que possam conhecê-los.</li>
                  <li>A atualização, retificação, integração dos dados, bem como a eliminação, transformação em forma anônima ou o bloqueio dos dados tratados em violação da lei, inclusive aqueles para os quais não é necessária sua conservação em relação aos fins para os quais foram coletados ou tratados posteriormente.</li>
                  <li>A certificação de que as operações mencionadas no ponto anterior foram notificadas, mesmo no que diz respeito ao seu conteúdo, àqueles a quem os dados foram comunicados ou divulgados, exceto nos casos em que isso se revele impossível ou envolva o uso de meios claramente desproporcionais em relação ao direito protegido.</li>
                </ul>
                <p className="pb-5 text-sm">
                  O titular dos dados, de acordo com o art. 7 do Código de Privacidade, também tem o direito de se opor, por motivos legítimos, ao tratamento de dados pessoais, mesmo que sejam relevantes para os fins da coleta, bem como ao tratamento de dados pessoais para fins de envio de comunicações promocionais ou para a realização de pesquisas de mercado. Todos esses direitos podem ser exercidos escrevendo para o e-mail do Escritório Jurídico.
                  Esta Política de Privacidade pode estar sujeita a atualizações periódicas.
                </p>
              </div>


              {/* English */}
              <div className="mb-10">
                <img src="/images/estados-unidos.png" alt="Bandera United States" className="h-6 w-6 mr-2" />
                <h1 className="pb-5 text-xl">Studio Legale Agovino Monteforte Privacy Policy</h1>
                <p className="pb-5 text-sm">
                  Pursuant to Article 13 of Legislative Decree No. 196 of June 30, 2003, this notice describes how the Agovino Monteforte Law Firm handles users' personal data in relation to the use of the website <a href="http://www.studiolegaleagovinomonteforte.com">www.studiolegaleagovinomonteforte.com</a>.
                </p>
                <h2 className="pb-5 text-sm">Data Controller</h2>
                <p className="pb-5 text-sm">
                  The data controller of the personal data related to the website is Lawyer Maura Monteforte.
                </p>
                <h2 className="pb-5 text-sm">Categories, Nature, and Purpose of Processed Data</h2>
                <p className="pb-5 text-sm">
                  The Law Firm will process some personal data of users interacting with the web services of the website.
                </p>
                <h3 className="pb-5 text-sm">Browsing Data</h3>
                <p className="pb-5 text-sm">
                  These are browsing data that the computer systems automatically acquire during the use of the website, such as the IP address, URI (Uniform Resource Identifier) addresses, as well as details of requests sent to the website server, allowing navigation. Browsing data may also be used to collect anonymous statistics to help understand website usage and improve its structure.
                </p>
                <p className="pb-5 text-sm">
                  Finally, browsing data may be used to detect unlawful activities, such as cybercrimes, that harm the website.
                </p>
                <h3 className="pb-5 text-sm">Data Provided by Users</h3>
                <p className="pb-5 text-sm">
                  Any communications sent to the contacts listed on the website result in the acquisition of the sender's email address and any other personal data contained in the communication.
                </p>
                <h3 className="pb-5 text-sm">Cookies</h3>
                <p className="pb-5 text-sm">
                  The website may use certain types of cookies. Specifically, the website uses session cookies, whose purpose is limited to transmitting session identifiers necessary for efficient navigation. Other types of cookies or similar technologies may occasionally be used to enable the use of the website or specific features. Some persistent cookies may be used to track the language utilized by the user's system, and these can be disabled at any time. No cookies are used for the acquisition and transmission of users' personal data or tracking cookies. For session data and data strictly necessary for the website's operation, providing such data is necessary and does not require user consent. Failure to provide this data may prevent users from navigating the website. For more information on disabling and configuring cookies, users can consult their browser's "Help" section or follow specific procedures provided by their browser.
                </p>
                <h2 className="pb-5 text-sm">Optional Nature of Data Provision</h2>
                <p className="pb-5 text-sm">
                  Except as indicated regarding browsing data and cookies, users are free to provide personal data to the Law Firm. Failure to provide such data may prevent the receipt of responses.
                </p>
                <h2 className="pb-5 text-sm">Processing Methods</h2>
                <p className="pb-5 text-sm">
                  Personal data is processed using automated tools, with logic strictly related to the intended purposes, and for the time strictly necessary to achieve the purposes for which it was collected. The information collected is stored in a secure environment.
                </p>
                <h2 className="pb-5 text-sm">Scope of Data Communication</h2>
                <p className="pb-5 text-sm">
                  Personal data will be processed by the data controller and, where necessary, by collaborators. Personal data may also be processed by third-party service providers (e.g., technical support) acting on behalf or on behalf of the Law Firm, duly appointed as Data Processors, and will process the data in compliance with the purpose for which it was originally collected.
                </p>
                <h2 className="pb-5 text-sm">Disclosure of Data</h2>
                <p className="pb-5 text-sm">
                  Personal data will not be disclosed.
                </p>
                <h2 className="pb-5 text-sm">Data Subject Rights</h2>
                <p className="pb-5 text-sm">
                  The law grants data subjects the right to exercise specific rights. In particular, at any time, the data subject may obtain:
                </p>
                <ul className="list-disc list-inside pb-5 text-sm">
                  <li>Confirmation of the existence or non-existence of personal data concerning them, even if not yet recorded, and its communication in an intelligible form.</li>
                  <li>Information on the origin of the personal data, the purposes, and methods of processing, as well as the logic applied if processing is carried out using electronic tools.</li>
                  <li>Information on the identification details of the controller and the processors, as well as the subjects or categories of subjects to whom the personal data may be communicated or who may become aware of it.</li>
                  <li>Updating, rectification, or integration of data, as well as erasure, anonymization, or blocking of data processed unlawfully, including data for which retention is not necessary in relation to the purposes for which it was collected or subsequently processed.</li>
                  <li>Certification that the operations mentioned in the previous point have been notified, including their content, to those to whom the data has been communicated or disclosed, except in cases where this proves impossible or involves the use of means clearly disproportionate to the protected right.</li>
                </ul>
                <p className="pb-5 text-sm">
                  The data subject, under Article 7 of the Privacy Code, also has the right to object, for legitimate reasons, to the processing of personal data, even if relevant to the purpose of collection, as well as to the processing of personal data for the purpose of sending promotional communications or for market research purposes. All these rights may be exercised by writing to the Law Firm's email address.
                  This Privacy Policy may be subject to periodic updates.
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;