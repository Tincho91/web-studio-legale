'use client';

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import LocaleSwitcher from './localeSwitcher';


interface Translations {
  locale: string;
  home: string;
  aboutUs: string;
  services: string;
  contact: string;
}

interface HamburgerMenuProps {
  translations: Translations;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ translations }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      originX: 0,
      originY: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      originX: 0,
      originY: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className={`p-2 ${isOpen ? 'text-white' : 'text-blue-800'}`}
        aria-label="Open navigation"
      >
        <FaBars size="25px" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-blue-800 text-white z-50"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <button
              onClick={closeMenu}
              className="absolute left-4 top-4 text-white"
              aria-label="Close navigation"
            >
              ✕
            </button>
            <div className="flex flex-col justify-center items-center h-full">
              <div className="flex flex-col space-y-4 items-center">
                <a
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                  href={`/${translations.locale}`}
                  onClick={closeMenu}
                >
                  {translations.home}
                </a>
                <a
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                  href={`/${translations.locale}/noi`}
                  onClick={closeMenu}
                >
                  {translations.aboutUs}
                </a>
                <a
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                  href={`/${translations.locale}/servizi`}
                  onClick={closeMenu}
                >
                  {translations.services}
                </a>
                <a
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                  href={`/${translations.locale}/contatti`}
                  onClick={closeMenu}
                >
                  {translations.contact}
                </a>
              </div>
              <LocaleSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;