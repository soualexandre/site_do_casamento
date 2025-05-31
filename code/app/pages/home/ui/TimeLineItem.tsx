"use client";
import React from 'react';
import { motion } from 'framer-motion';

type TimelineItemProps = {
  item: {
    year: string;
    title: string;
    description: string;
  };
  index: number;
  isEven: boolean;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, isEven }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex flex-col md:flex-row items-center"
    >
      <div className={`md:w-1/2 md:px-8 mb-6 md:mb-0 ${isEven ? 'md:text-right md:order-1' : 'md:text-left'}`}>
        <div className={`bg-purple-50 p-6 rounded-2xl shadow-lg ${isEven ? 'md:mr-6' : 'md:ml-6'}`}>
          <span className="inline-block bg-gold-400 text-purple-900 text-sm px-3 py-1 rounded-full mb-2">
            {item.year}
          </span>
          <h3 className="font-playfair text-2xl text-purple-800 mb-2">{item.title}</h3>
          <p className="font-raleway text-purple-700">{item.description}</p>
        </div>
      </div>
      
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-y-0 top-1/2 md:top-0">
        <div className="w-6 h-6 rounded-full bg-gold-400 border-4 border-white shadow-lg"></div>
      </div>
      
      <div className={`md:w-1/2 md:px-8 ${isEven ? 'md:order-2' : ''}`}>
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 md:h-64" />
      </div>
    </motion.div>
  );
};

export default TimelineItem;