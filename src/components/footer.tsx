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
    <footer className="bg-gray-900 text-white pt-8 pb-5">
      <div className="mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Additional Information */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-5 w-full">
            <div className="flex flex-col justify-start items-start text-left sm:w-1/2">
              <p className="font-bold">Sede di Cosenza</p>
              <p className="font-bold">87100 - Piazza Gullo, 5</p>
              <p className="font-bold">Email: infosegreteria@studiolegale.com</p>
            </div>
            <div className="flex flex-col justify-end items-end sm:items-end sm:w-1/2 mt-5 sm:mt-0 text-right">
              <a href="#" className="text-blue-400" onClick={openPrivacyModal}>
                Privacy Policy
              </a>
              <a href="#" className="text-blue-400 mt-2 sm:mt-0 sm:ml-4" onClick={openCookiesModal}>
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Brand Logo and Socials */}
          <div className="flex justify-between w-full items-center mt-10">
            <div className="flex items-center gap-5 ml-auto">
              <a href="mailto:example@example.com" className="text-white">
                <FaEnvelope size="2em" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=PHONE_NUMBER" className="text-white">
                <FaWhatsapp size="2em" />
              </a>
              <a href="https://www.linkedin.com/" className="text-white">
                <FaLinkedin size="2em" />
              </a>
            </div>
          </div>

          {/* Designed by Neomedi Analytica */}
          <div className="w-full text-center mt-5 text-sm">
            <p>
              Designed by <span className="italic font-bold">Neomedi Analytica</span>
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-75 flex justify-center items-center">
          <div className="relative bg-white p-4 md:p-8 max-w-3xl w-full">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-sm md:text-base">
              {/* Contenido de la Privacy Policy */}
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md" onClick={closePrivacyModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Cookie Policy Modal */}
      {isCookiesOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-75 flex justify-center items-center">
          <div className="relative bg-white p-4 md:p-8 max-w-3xl w-full">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Cookie Policy</h2>
            <p className="text-sm md:text-base">
              {/* Contenido de la Cookie Policy */}
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md" onClick={closeCookiesModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
