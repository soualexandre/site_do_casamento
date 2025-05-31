"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from 'react-icons/fa';

const EventInfo: React.FC = () => {
  return (
    <section id="evento" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl text-purple-800 mb-4">O Grande Dia</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="md:flex items-center gap-12">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-full h-96" />
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-playfair text-3xl text-purple-800 mb-6">Cerimônia & Recepção</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-gold-500">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h4 className="font-raleway font-semibold text-purple-700 mb-1">Localização</h4>
                    <p className="font-raleway text-purple-600">Chácara Paraíso</p>
                    <p className="font-raleway text-purple-600">Rua 27, quadra 10, Setor Bueno</p>
                    <p className="font-raleway text-purple-600">Paraíso do Tocantins, TO</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-gold-500">
                    <FaCalendarAlt size={24} />
                  </div>
                  <div>
                    <h4 className="font-raleway font-semibold text-purple-700 mb-1">Data</h4>
                    <p className="font-raleway text-purple-600">09 de Agosto de 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-gold-500">
                    <FaClock size={24} />
                  </div>
                  <div>
                    <h4 className="font-raleway font-semibold text-purple-700 mb-1">Horário</h4>
                    <p className="font-raleway text-purple-600">Cerimônia: 16h</p>
                    <p className="font-raleway text-purple-600">Recepção: 18h</p>
                  </div>
                </div>
                
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-purple-700 text-white font-raleway font-medium px-6 py-3 rounded-full hover:bg-purple-800 transition-colors duration-300"
                >
                  Ver no Mapa
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;