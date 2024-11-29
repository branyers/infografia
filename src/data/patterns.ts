import { Factory, Layers, Activity } from 'lucide-react';

export const patternsData = {
  creational: {
    title: "Patrones de Diseño Creacional",
    description: "Se centran en los mecanismos de creación de objetos",
    icon: Factory,
    patterns: [
      "Singleton",
      "Factory Method",
      "Abstract Factory",
      "Builder",
      "Prototype"
    ],
    bgColor: "bg-green-100"
  },
  structural: {
    title: "Patrones de Diseño Estructurales",
    description: "Definen cómo se componen las clases y objetos",
    icon: Layers,
    patterns: [
      "Adapter",
      "Bridge",
      "Composite",
      "Decorator",
      "Facade",
      "Flyweight",
      "Proxy"
    ],
    bgColor: "bg-blue-100"
  },
  behavioral: {
    title: "Patrones de Diseño Conductual",
    description: "Gestionan algoritmos y responsabilidades entre objetos",
    icon: Activity,
    patterns: [
      "Chain of Responsibility",
      "Command",
      "Iterator",
      "Mediator",
      "Observer",
      "State",
      "Strategy"
    ],
    bgColor: "bg-purple-100"
  }
};