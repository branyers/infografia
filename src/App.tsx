import React from 'react';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { PatternScene } from './components/3d/PatternScene';
import { Timeline } from './components/Timeline';
import { PatternComparison } from './components/PatternComparison';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 to-purple-700 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <ThemeToggle />
      <Header />
      <main className="container mx-auto py-8 px-4 space-y-12">
        <Introduction />
        <PatternScene />
        <Timeline />
        <PatternComparison />
      </main>
    </div>
  );
}

export default App;