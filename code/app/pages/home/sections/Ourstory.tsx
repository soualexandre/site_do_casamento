"use client";
import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: 'Fevereiro de 2023',
    title: 'Nosso Encontro',
    description: 'Nos conhecemos na igreja e quando nossos olhares se cruzaram, sentimos uma conexão instantânea.'
  },
  {
    year: 'Abril de 2023',
    title: 'Começamos a Namorar',
    description: 'Nosso primeiro encontro foi mágico, e logo decidimos que queríamos estar juntos.'
  },
  {
    year: 'Maio de 2024',
    title: 'O Pedido de Noivado',
    description: 'Alexandre pediu Acsa em noivado em um piquenique romântico no parque.'
  }
];

const OurStory: React.FC = () => {
  return (
    <section id="nossa-historia" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-purple-800 mb-3 md:mb-4">Nossa História</h2>
          <div className="w-20 md:w-24 h-1 bg-gold-400 mx-auto"></div>
        </motion.div>

        {/* Timeline para mobile com linha vertical */}
        <div className="md:hidden relative pl-4">
          {/* Linha vertical */}
          <div className="absolute left-4 top-13 h-full w-1 bg-gradient-to-b from-purple-200 to-gold-200 z-0 animate-pulse"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pb-10 last:pb-0 pl-8"
            >
              <div className="bg-purple-50 p-5 rounded-2xl shadow-sm border border-purple-100">
                <span className="inline-block bg-gold-400 text-purple-900 text-xs px-3 py-1 rounded-full mb-2">
                  {item.year}
                </span>
                <h3 className="font-playfair text-lg text-purple-800 mb-2">{item.title}</h3>
                <p className="font-raleway text-purple-700 text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline para desktop */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-200 to-gold-200"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-center"
              >
                <div className={`w-1/2 px-8 ${index % 2 === 0 ? 'order-1 text-right' : 'text-left'}`}>
                  <div className={`bg-purple-50 p-6 rounded-2xl shadow-lg ${index % 2 === 0 ? 'mr-6' : 'ml-6'}`}>
                    <span className="inline-block bg-gold-400 text-purple-900 text-sm px-3 py-1 rounded-full mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-playfair text-xl text-purple-800 mb-2">{item.title}</h3>
                    <p className="font-raleway text-purple-700">{item.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full bg-gold-400 border-4 border-white shadow-lg"></div>
                </div>

                <div className={`w-1/2 px-8 ${index % 2 === 0 ? 'order-2' : ''}`}>
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 md:h-64" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
