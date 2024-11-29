import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TimelineNode } from './TimelineNode';
import { patternData } from '../data/patternData';
import { Modal } from './Modal';
import { CodeBlock } from './CodeBlock';
import { patternExamples } from '../data/patternExamples';

export function Timeline() {
  // Estado para manejar la apertura de modales individuales para cada patrón
  const [openModals, setOpenModals] = useState<{ [patternName: string]: boolean }>({});

  // Función para abrir el modal de un patrón específico
  const openModal = (patternName: string) => {
    setOpenModals((prev) => ({ ...prev, [patternName]: true }));
  };

  // Función para cerrar el modal de un patrón específico
  const closeModal = (patternName: string) => {
    setOpenModals((prev) => ({ ...prev, [patternName]: false }));
  };

  return (
    <div className="relative">
      {/* Línea vertical */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20" />

      <div className="relative space-y-24">
        {patternData.map((section, index) => (
          <TimelineNode
            key={index}
            data={section}
            index={index}
            isActive={openModals[section.title] || false}
            onClick={() => setOpenModals((prev) => ({
              ...prev,
              [section.title]: !prev[section.title] // Toggle active state
            }))}
            onOpenModal={openModal} // Función para abrir el modal
          />
        ))}
      </div>

      {/* Modal para cada patrón */}
      {patternData.map((section) =>
        section.patterns.map((pattern) => (
          <Modal
            key={pattern.name}
            isOpen={openModals[pattern.name] || false}
            onClose={() => closeModal(pattern.name)}
            title={`Ejemplo de ${pattern.name}`}
          >
            {openModals[pattern.name] && (
              <div className="prose dark:prose-invert max-w-none">
                <p className="mb-4">
                  Este es un ejemplo práctico de implementación del patrón {pattern.name} en C#:
                </p>
                <CodeBlock code={patternExamples[pattern.name] || ''} />
              </div>
            )}
          </Modal>
        ))
      )}
    </div>
  );
}