"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RSVPSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <section id="confirmacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl text-purple-800 mb-4">Confirmação de Presença</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-gradient-to-br from-purple-700 to-purple-900 rounded-3xl p-1 shadow-2xl"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 text-center">
            <h3 className="font-playfair text-3xl text-purple-800 mb-4">Você está convidado!</h3>
            <p className="font-raleway text-purple-700 mb-8 max-w-md mx-auto">
              Sua presença é o nosso presente! Por favor, confirme sua presença até 30 de Setembro.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-purple-700 text-white font-raleway font-semibold px-8 py-4 rounded-full hover:bg-purple-800 transition-colors duration-300"
            >
              Confirmar Presença
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* RSVP Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <motion.div 
            className="bg-white rounded-2xl max-w-md w-full p-8 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="font-playfair text-2xl text-purple-800 mb-4">Confirme sua presença</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-left font-raleway font-medium text-purple-700 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label className="block text-left font-raleway font-medium text-purple-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              
              <div>
                <label className="block text-left font-raleway font-medium text-purple-700 mb-2">Número de convidados</label>
                <select className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                  <option>1 pessoa</option>
                  <option>2 pessoas</option>
                  <option>3 pessoas</option>
                  <option>4 pessoas</option>
                  <option>5 pessoas</option>
                </select>
              </div>
              
              <div>
                <label className="block text-left font-raleway font-medium text-purple-700 mb-2">Mensagem (opcional)</label>
                <textarea 
                  className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Deixe uma mensagem para os noivos"
                  rows={3}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-purple-700 text-white font-raleway font-semibold py-3 rounded-xl hover:bg-purple-800 transition-colors duration-300"
              >
                Confirmar Presença
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default RSVPSection;