import React from 'react';
import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-indigo-800 to-purple-900 text-white py-12 px-4"
    >
      <div className="max-w-4xl mx-auto flex items-center gap-4">
        <motion.div
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Code2 className="w-12 h-12" />
        </motion.div>
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold"
          >
            Patrones de Diseño
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-indigo-200 mt-2"
          >
            Una guía completa de patrones de diseño en programación
          </motion.p>
        </div>
      </div>
    </motion.header>
  );
}