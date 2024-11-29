import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react'; // Si no lo usas, puedes eliminarlo
import { PatternDetails } from './PatternDetails';

interface Pattern {
  name: string;
  description: string;
  examples: string[];
}

interface TimelineNodeProps {
  data: {
    title: string;
    description: string;
    icon: React.ComponentType; // Usamos ComponentType en lugar de LucideIcon
    patterns: Pattern[];
  };
  index: number;
  isActive: boolean;
  onClick: () => void;
  onOpenModal: (patternName: string) => void; // Función para abrir el modal
}

export function TimelineNode({
  data,
  index,
  isActive,
  onClick,
  onOpenModal,
}: TimelineNodeProps) {
  const isLeft = index % 2 === 0;
  const Icon = data.icon;

  return (
    <div className={`flex items-center justify-center ${isLeft ? 'flex-row-reverse' : ''}`}>
      {/* Contenido del patrón */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-lg shadow-xl p-6 cursor-pointer"
        >
          <div className="flex items-center gap-3 mb-4">
            <Icon className="w-8 h-8 text-orange-500" />
            <h3 className="text-2xl font-bold text-gray-800">{data.title}</h3>
          </div>
          <p className="text-gray-600">{data.description}</p>

          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-6"
            >
              {data.patterns.map((pattern, idx) => (
                <div key={idx}>
                  <PatternDetails pattern={pattern} />
                  {/* Aquí colocamos el botón dentro del mismo contenedor de la descripción */}
                  <motion.button
                    onClick={() => onOpenModal(pattern.name)} // Usamos el nombre del patrón para abrir su modal
                    className="mt-4 p-2 bg-blue-500 text-white rounded-md"
                  >
                    Ver ejemplo
                  </motion.button>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Nodo */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-10 cursor-pointer"
        onClick={onClick} // Manejo de click en el nodo para cambiar el estado activo
      >
        <Icon className="w-8 h-8 text-orange-500" />
      </motion.div>
    </div>
  );
}
