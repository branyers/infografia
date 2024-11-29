import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface PatternSectionProps {
  title: string;
  description: string;
  icon: LucideIcon;
  patterns: string[];
  bgColor: string;
}

export function PatternSection({ title, description, icon: Icon, patterns, bgColor }: PatternSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className={`${bgColor} p-6 rounded-lg shadow-lg transition-all duration-300`}
    >
      <motion.div 
        className="flex items-center gap-3 mb-4"
        whileHover={{ x: 5 }}
      >
        <Icon className="w-8 h-8" />
        <h3 className="text-xl font-bold">{title}</h3>
      </motion.div>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="space-y-2">
        {patterns.map((pattern, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 10 }}
            className="flex items-center gap-2 p-2 hover:bg-white/50 rounded-lg cursor-pointer"
          >
            <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
            <span>{pattern}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}