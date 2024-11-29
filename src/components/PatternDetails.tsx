import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Check, AlertTriangle } from 'lucide-react';
import { Modal } from './Modal';
import { CodeBlock } from './CodeBlock';
import { patternExamples } from '../data/patternExamples';

interface PatternDetailsProps {
  pattern: {
    name: string;
    description: string;
    examples: string[];
    benefits: string[];
    considerations: string[];
  };
}

export function PatternDetails({ pattern }: PatternDetailsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-4 last:mb-0"
      >
        <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{pattern.name}</h4>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{pattern.description}</p>
        
        <div className="space-y-6">
          <div>
            <h5 className="font-semibold text-lg text-gray-700 dark:text-gray-200 mb-3">Ejemplos de uso:</h5>
            <div className="grid gap-2">
              {pattern.examples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                >
                  <ArrowRight className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>{example}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-lg text-gray-700 dark:text-gray-200 mb-3">Beneficios:</h5>
            <div className="grid gap-2">
              {pattern.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                >
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-lg text-gray-700 dark:text-gray-200 mb-3">Consideraciones:</h5>
            <div className="grid gap-2">
              {pattern.considerations.map((consideration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                >
                  <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                  <span>{consideration}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.button
          
        >
        </motion.button>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Ejemplo de ${pattern.name} en C#`}
      >
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4">
            Este es un ejemplo práctico de implementación del patrón {pattern.name} en C#:
          </p>
          <CodeBlock code={patternExamples[pattern.name as keyof typeof patternExamples] || ''} />
          <div className="mt-6 p-4 bg-indigo-50 dark:bg-gray-700 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">Notas de implementación:</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Este ejemplo muestra una implementación básica del patrón. En un escenario real, 
              podrías necesitar agregar manejo de errores adicional, logging, y otras 
              consideraciones específicas de tu aplicación.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}