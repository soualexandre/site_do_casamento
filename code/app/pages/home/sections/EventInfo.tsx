"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from 'react-icons/fa';

const EventInfo: React.FC = () => {
  return (
    <section id="evento" className="py-16 md:py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-purple-800 mb-3">O Grande Dia</h2>
          <div className="w-20 md:w-24 h-1 bg-gold-400 mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="w-full md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-full h-64 sm:h-80 md:h-96" />
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-playfair text-2xl md:text-3xl text-purple-800 mb-6 text-center md:text-left">Cerimônia & Recepção</h3>
              
              <div className="space-y-6">
                {/* Localização */}
                <div className="flex items-start gap-4">
                  <div className="text-gold-500 mt-1">
                    <FaMapMarkerAlt size={20} className="md:size-6" />
                  </div>
                  <div>
                    <h4 className="font-raleway font-semibold text-purple-700 text-base md:text-lg mb-1">Localização</h4>
                    <p className="font-raleway text-purple-600 text-sm md:text-base">Chácara Paraíso</p>
                    <p className="font-raleway text-purple-600 text-sm md:text-base">Rua 27, quadra 10, Setor Bueno</p>
                    <p className="font-raleway text-purple-600 text-sm md:text-base">Paraíso do Tocantins, TO</p>
                  </div>
                </div>

                {/* Data */}
                <div className="flex items-start gap-4">
                  <div className="text-gold-500 mt-1">
                    <FaCalendarAlt size={20} className="md:size-6" />
                  </div>
                  <div>
                    <h4 className="font-raleway font-semibold text-purple-700 text-base md:text-lg mb-1">Data</h4>
                    <p className="font-raleway text-purple-600 text-sm md:text-base">09 de Agosto de 2025</p>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start gap-4">
                  <div className="text-gold-500 mt-1">
                    <FaClock size={20} className="md:size-6" />
                  </div>
                  <div>
                    <h4 className="font-raleway font-semibold text-purple-700 text-base md:text-lg mb-1">Horário</h4>
                    <p className="font-raleway text-purple-600 text-sm md:text-base">Cerimônia: 16h</p>
                    <p className="font-raleway text-purple-600 text-sm md:text-base">Recepção: 18h</p>
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-6 bg-purple-700 text-white font-raleway font-medium px-6 py-3 rounded-full hover:bg-purple-800 transition-colors duration-300 text-sm md:text-base"
                  >
                    Ver no Mapa
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
