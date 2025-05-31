"use client";
import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from '../ui/TimeLineItem';

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
    <section id="nossa-historia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl text-purple-800 mb-4">Nossa História</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-200 to-gold-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <TimelineItem 
                key={item.year}
                item={item}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;