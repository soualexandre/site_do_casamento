"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-900 text-purple-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h4 className="font-playfair text-2xl mb-4">Carolina & Eduardo</h4>
            <p className="font-raleway">12 de Outubro de 2024</p>
          </div>
          
          <div className="flex space-x-6 mb-8 md:mb-0">
            {[
              { icon: FaInstagram, label: 'Instagram' },
              { icon: FaFacebook, label: 'Facebook' },
              { icon: FaPinterest, label: 'Pinterest' }
            ].map((social, index) => (
              <motion.a 
                key={index}
                href="#"
                className="text-2xl hover:text-gold-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
          
          <div className="text-center md:text-right">
            <p className="font-raleway">
              Desenvolvido com ❤️ por Carolina & Eduardo
            </p>
            <p className="font-raleway text-sm mt-2 text-purple-200">
              © {new Date().getFullYear()} Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;