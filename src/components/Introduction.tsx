import React from 'react';
import { motion } from 'framer-motion';
import { Repeat, Shield, Users } from 'lucide-react';

export function Introduction() {
  const features = [
    { title: "Reutilización", desc: "Soluciones probadas y testeadas", icon: Repeat },
    { title: "Mantenibilidad", desc: "Código más fácil de mantener", icon: Shield },
    { title: "Comunicación", desc: "Vocabulario común entre desarrolladores", icon: Users }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-bold mb-4"
      >
        Introducción a los Patrones de Diseño
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-700 leading-relaxed"
      >
        Los patrones de diseño son soluciones probadas para problemas comunes en el desarrollo de software. 
        Proporcionan un template que puede ser utilizado en muchas situaciones diferentes, mejorando la 
        mantenibilidad y escalabilidad del código.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-300"
            >
              <Icon className="w-8 h-8 mb-3 text-purple-600" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}