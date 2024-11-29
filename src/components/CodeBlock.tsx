import React from 'react';
import { motion } from 'framer-motion';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'csharp' }: CodeBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="relative"
    >
      <div className="absolute top-3 right-3 px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-300 font-mono">
        {language}
      </div>
      <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
        <code className="block whitespace-pre font-mono text-sm leading-relaxed">
          {code}
        </code>
      </pre>
    </motion.div>
  );
}