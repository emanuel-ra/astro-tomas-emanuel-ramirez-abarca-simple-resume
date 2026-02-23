export const projects = [
    {
    id: 1,
    title: {
      en: "Modular ERP with Microservices Architecture",
      es: "ERP Modular con Arquitectura de Microservicios",
    },
    description: {
        en: "An ERP system designed for the comprehensive management of companies, branches, warehouses, clients, products, and electronic invoicing (income, expenses, and payment complements). It also handles accounts receivable, banking, and credit management. The system is built with a microservices architecture, focusing on separation of concerns, ensuring modularity and scalability. Several key patterns and technologies are integrated to optimize development and performance. The solution is deployed on **Microsoft Azure**, leveraging cloud services for scalability, security, and high availability.",
        es: "Sistema ERP diseñado para la gestión integral de empresas, sucursales, almacenes, clientes, productos y facturación electrónica (ingresos, egresos y complementos de pago). También incluye la administración de cuentas por cobrar, bancos y créditos. El sistema está construido con una arquitectura de microservicios, enfocada en la separación de responsabilidades, lo que garantiza modularidad y escalabilidad. Se integran diversos patrones y tecnologías clave para optimizar el desarrollo y el rendimiento. La solución está desplegada en **Microsoft Azure**, aprovechando servicios en la nube para garantizar escalabilidad, seguridad y alta disponibilidad."
    },
    techStack: [
        ".NET Core",
        "React",
        "Material UI v5",
        "SQL Server",
        "CosmosDB",
        "JWT",
        "Entity Framework",
        "CQRS",
        "Microsoft Azure"
    ],
    url: "",
    order:1
  },
  {
    id: 2,
    title: {
      en: "ERP for Massive Home",
      es: "ERP para Massive Home",
    },
    description: {
      en: "An ERP system developed and deployed within Massive Home's local network, designed to optimize business management. It enables the generation of Electronic Invoices (income, expense, and payment complements) and facilitates the management of quotations, sales, and warehouse operations. Its implementation has improved internal process efficiency and enhanced the traceability of business operations.",
      es: "Sistema ERP desarrollado y desplegado en la red local de la empresa Massive Home, diseñado para optimizar la gestión empresarial. Permite la generación de Facturas Electrónicas (ingreso, egreso y complementos de pago), así como la administración de cotizaciones, ventas y gestión de almacenes. Su implementación ha mejorado la eficiencia en los procesos internos y la trazabilidad de las operaciones comerciales.",
    },
    techStack: ["PHP", "SQL", "Javascript", "Query", "Bootstrap","HTML"],
    url: "",
    order:2
  },
  {
    id: 3,
    title: {
      en: "Massive Home's Web Site",
      es: "Pagina Web de Massive Home",
    },
    description: {
      en: "Development of the company’s website, allowing users to explore product catalogs, access contact information, and find store locations. The platform offers an intuitive experience to enhance customer engagement and strengthen the company's digital presence.",
      es: "Desarrollo de la página web de la empresa, donde los usuarios pueden explorar catálogos de productos, acceder a información de contacto y consultar la ubicación de tiendas. La plataforma proporciona una experiencia intuitiva para mejorar la interacción con los clientes y fortalecer la presencia digital de la empresa.",
    },
    techStack: ["PHP", "MySql", "CodeIgniter 4", "TailwindCss V4", "JavaScript","HTML"],
    url: "",
    order:3
  },
  {
    id: 4,
    title: {
      en: "HR Management System",
      es: "Sistema Administrativo para Recursos Humanos",
    },
    description: {
      en: "Development of a multi-company, multi-branch administrative system designed to optimize the Human Resources department. It enables users to manage employees by branch, handle vacation days, leave requests, contract generation, candidate prospecting, and interview management, as well as generate employee reports, onboarding, offboarding, and more. The platform enhances efficiency in talent management and internal company processes.",
      es: "Desarrollo de un sistema administrativo multiempresa y multisucursal diseñado para optimizar la gestión del departamento de Recursos Humanos. Permite a los usuarios administrar empleados por sucursal, gestionar días de vacaciones, permisos, generación de contratos, prospección de candidatos y entrevistas, así como generar reportes de empleados, altas, bajas y más. La plataforma mejora la eficiencia en la administración del talento y los procesos internos de la empresa.",
    },
    techStack: ["PHP", "MySql", "Laravel", "Bootstrap","JavaScript","JQuery","AdminLTE"],
    url: "",
    order:4
  },
];
