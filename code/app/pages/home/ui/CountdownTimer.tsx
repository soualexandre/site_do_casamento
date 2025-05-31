"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type CountdownTimerProps = {
  weddingDate: Date;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ weddingDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;
      
      if (distance <= 0) {
        clearInterval(interval);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <div className="flex justify-center space-x-2 md:space-x-4 lg:space-x-6">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <motion.div 
          key={unit}
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-xl w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center">
            <span className="font-playfair text-2xl md:text-3xl font-bold text-white">
              {Math.floor(value)}
            </span>
          </div>
          <span className="mt-2 block font-raleway text-sm uppercase tracking-wider text-white">
            {unit}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;