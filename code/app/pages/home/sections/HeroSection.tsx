"use client";
import React from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from '../ui/CountdownTimer';
import Image from 'next/image'; // Importe o componente Image

type HepurplectionProps = {
    weddingDate: Date;
};

const Hepurplection: React.FC<HepurplectionProps> = ({ weddingDate }) => {
    return (
        <section
            id="inicio"
            className="relative h-screen flex items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 z-0">
                <Image
                    src="/preview.jpg"
                    alt="Acsa e Alexandre"
                    fill
                    className="object-cover w-full h-full brightness-20"
                    quality={100}
                    priority
                />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white"
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mb-8"
                    >
                        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl mb-4 text-white drop-shadow-lg">
                            Acsa <span className="text-gold-300">&</span> Alexandre
                        </h1>
                        <p className="font-raleway text-xl md:text-2xl text-white/90">
                            Estamos nos casando!
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mb-10"
                    >
                        <p className="text-2xl md:text-3xl font-light mb-2 text-white">09 de agosto de 2025</p>
                        <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
                    </motion.div>

                    <CountdownTimer weddingDate={weddingDate} />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="mt-12"
                    >
                        <a
                            href="#nossa-historia"
                            className="inline-block bg-transparent border-2 border-white text-white font-raleway font-medium px-8 py-3 rounded-full hover:bg-white hover:text-purple-800 transition-all duration-300 shadow-lg"
                        >
                            Ver Detalhes
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
};

export default Hepurplection;