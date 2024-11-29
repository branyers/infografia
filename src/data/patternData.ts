import { Factory, Layers, Activity } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Pattern {
  name: string;
  description: string;
  examples: string[];
  benefits: string[];
  considerations: string[];
}

interface PatternSection {
  title: string;
  description: string;
  icon: LucideIcon;
  patterns: Pattern[];
}

export const patternData: PatternSection[] = [
  {
    title: "Patrones Creacionales",
    description: "Mecanismos de creación de objetos que incrementan la flexibilidad y reutilización del código existente.",
    icon: Factory,
    patterns: [
      {
        name: "Singleton",
        description: "El patrón Singleton garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella. Es especialmente útil cuando exactamente un objeto tiene que coordinar acciones en todo el sistema. Implementa un mecanismo para evitar la creación de múltiples instancias y asegura el acceso controlado a la instancia única.",
        examples: [
          "Gestores de conexiones a bases de datos",
          "Configuraciones globales de la aplicación",
          "Gestores de caché",
          "Spoolers de impresión",
          "Registros de logging"
        ],
        benefits: [
          "Acceso controlado a la única instancia",
          "Reducción del uso de memoria",
          "Evita conflictos de acceso a recursos compartidos"
        ],
        considerations: [
          "Puede dificultar el testing unitario",
          "Puede considerarse un anti-patrón si se abusa de él",
          "Problemas potenciales en entornos multihilo"
        ]
      },
      {
        name: "Factory Method",
        description: "El patrón Factory Method define una interfaz para crear objetos, pero permite a las subclases decidir qué clase instanciar. Proporciona una manera de delegar la lógica de instanciación a las clases hijas, promoviendo el bajo acoplamiento y permitiendo la extensión del código sin modificar el existente.",
        examples: [
          "Creación de diferentes tipos de documentos en un editor",
          "Generación de diferentes formatos de reportes",
          "Creación de elementos de interfaz de usuario",
          "Inicialización de conexiones de red con diferentes protocolos",
          "Generación de diferentes tipos de gráficos"
        ],
        benefits: [
          "Elimina el acoplamiento entre el creador y los productos concretos",
          "Centraliza la lógica de creación de objetos",
          "Facilita la adición de nuevos tipos de productos"
        ],
        considerations: [
          "Puede resultar en una jerarquía de clases compleja",
          "Requiere la creación de subclases para cada nuevo tipo",
          "Puede aumentar la complejidad del código"
        ]
      },
      {
        name: "Abstract Factory",
        description: "El patrón Abstract Factory proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas. Permite producir familias de objetos relacionados sin revelar sus implementaciones específicas, asegurando que los productos creados sean compatibles entre sí.",
        examples: [
          "Creación de interfaces de usuario multiplataforma",
          "Generación de elementos de diferentes estilos visuales",
          "Creación de componentes de juegos para diferentes niveles",
          "Fabricación de partes de vehículos de diferentes marcas",
          "Generación de documentos en diferentes formatos"
        ],
        benefits: [
          "Garantiza la compatibilidad entre productos relacionados",
          "Evita el acoplamiento fuerte con clases concretas",
          "Facilita el intercambio de familias de productos"
        ],
        considerations: [
          "Mayor complejidad en la implementación",
          "Dificultad para añadir nuevos tipos de productos",
          "Puede resultar en muchas interfaces y clases"
        ]
      }
    ]
  },
  {
    title: "Patrones Estructurales",
    description: "Se ocupan de cómo las clases y objetos son compuestos para formar estructuras más grandes.",
    icon: Layers,
    patterns: [
      {
        name: "Adapter",
        description: "El patrón Adapter permite que interfaces incompatibles trabajen juntas convirtiendo la interfaz de una clase en otra que el cliente espera. Actúa como un puente entre dos interfaces incompatibles, permitiendo que clases con interfaces diferentes colaboren.",
        examples: [
          "Integración de bibliotecas de terceros",
          "Compatibilidad con sistemas legacy",
          "Adaptación de formatos de datos diferentes",
          "Conexión con múltiples APIs de pago",
          "Conversión entre diferentes formatos de archivo"
        ],
        benefits: [
          "Permite la interoperabilidad entre interfaces incompatibles",
          "Facilita la reutilización de código existente",
          "Mejora la mantenibilidad del código"
        ],
        considerations: [
          "Puede aumentar la complejidad del sistema",
          "Posible impacto en el rendimiento",
          "Puede requerir múltiples adaptadores"
        ]
      }
    ]
  },
  {
    title: "Patrones de Comportamiento",
    description: "Definen cómo los objetos interactúan y distribuyen responsabilidades.",
    icon: Activity,
    patterns: [
      {
        name: "Observer",
        description: "El patrón Observer define una dependencia uno-a-muchos entre objetos, de modo que cuando un objeto cambia su estado, todos sus dependientes son notificados y actualizados automáticamente. Permite establecer relaciones dinámicas entre objetos, donde los observadores se suscriben para recibir actualizaciones del sujeto observado.",
        examples: [
          "Sistemas de eventos en interfaces de usuario",
          "Actualizaciones en tiempo real",
          "Notificaciones push en aplicaciones",
          "Monitoreo de cambios en bases de datos",
          "Actualización de múltiples vistas de datos"
        ],
        benefits: [
          "Bajo acoplamiento entre objetos relacionados",
          "Soporte para comunicación broadcast",
          "Facilita la extensibilidad del sistema"
        ],
        considerations: [
          "Posibles problemas de rendimiento con muchos observadores",
          "Riesgo de memory leaks si no se gestionan bien las suscripciones",
          "Orden de notificación no garantizado"
        ]
      }
    ]
  }
];