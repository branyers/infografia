import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, FileCode, GitCompare } from 'lucide-react';

interface ComparisonData {
  pattern1: string;
  pattern2: string;
  differences: string[];
  useCases: {
    pattern1: string[];
    pattern2: string[];
  };
}

const comparisons: ComparisonData[] = [
  {
    pattern1: "Factory Method",
    pattern2: "Abstract Factory",
    differences: [
      "Factory Method crea un solo tipo de objeto",
      "Abstract Factory crea familias de objetos relacionados",
      "Factory Method usa herencia",
      "Abstract Factory usa composición"
    ],
    useCases: {
      pattern1: ["Creación de documentos en un editor", "Generación de reportes"],
      pattern2: ["Creación de UI multiplataforma", "Creación de componentes de diferentes estilos"]
    }
  },
  {
    pattern1: "Adapter",
    pattern2: "Bridge",
    differences: [
      "Adapter hace compatible interfaces incompatibles",
      "Bridge separa abstracción de implementación",
      "Adapter trabaja con sistemas existentes",
      "Bridge se diseña de antemano"
    ],
    useCases: {
      pattern1: ["Integración con APIs legacy", "Compatibilidad entre sistemas"],
      pattern2: ["Múltiples implementaciones de UI", "Drivers de dispositivos"]
    }
  }
];

export function PatternComparison() {
  const [activeComparison, setActiveComparison] = useState(0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <GitCompare className="w-6 h-6" />
        Comparación de Patrones
      </h2>

      <div className="flex gap-4 mb-6">
        {comparisons.map((comparison, index) => (
          <button
            key={index}
            onClick={() => setActiveComparison(index)}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeComparison === index
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {comparison.pattern1} vs {comparison.pattern2}
          </button>
        ))}
      </div>

      <motion.div
        key={activeComparison}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="grid md:grid-cols-2 gap-8"
      >
        <div className="space-y-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-blue-50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Code className="w-5 h-5" />
              {comparisons[activeComparison].pattern1}
            </h3>
            <ul className="space-y-2">
              {comparisons[activeComparison].useCases.pattern1.map((useCase, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  {useCase}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-purple-50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileCode className="w-5 h-5" />
              {comparisons[activeComparison].pattern2}
            </h3>
            <ul className="space-y-2">
              {comparisons[activeComparison].useCases.pattern2.map((useCase, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 text-purple-600" />
                  {useCase}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-50 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-4">Diferencias Clave</h3>
          <ul className="space-y-3">
            {comparisons[activeComparison].differences.map((difference, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm"
              >
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                {difference}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}