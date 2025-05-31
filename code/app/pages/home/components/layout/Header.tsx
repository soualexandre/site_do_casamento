"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type HeaderProps = {
  isScrolled: boolean;
};

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const navItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Nossa História', href: '#nossa-historia' },
    { name: 'O Evento', href: '#evento' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Confirmação', href: '#confirmacao' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" passHref legacyBehavior>
          <motion.a 
            className="text-3xl font-playfair font-bold text-purple-700 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            A&A
          </motion.a>
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} legacyBehavior>
                  <a className={`font-raleway font-medium hover:text-purple-600 transition-colors ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}>
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;