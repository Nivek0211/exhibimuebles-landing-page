# Exhibimuebles Valsequillo - Landing Page & Catálogo Dinámico

### [VER SITIO EN VIVO](https://exhibimuebles-valsequillo.netlify.app/) 

## Descripción del Proyecto
Este proyecto es una solución digital real desarrollada para una empresa dedicada a la fabricación y venta de mobiliario y exhibidores metálicos y de aluminio. El objetivo principal fue digitalizar su catálogo de productos para facilitar la preventa y mejorar la presencia de la marca en el mercado regional.

> **Nota de impacto profesional:** Este proyecto fue desarrollado bajo una modalidad freelance, cumpliendo con los requerimientos específicos del cliente, entregado satisfactoriamente y validado mediante pago por honorarios.

---

## Stack Tecnológico
* **Frontend:** HTML5, CSS3, JavaScript Vanilla (ES6+).
* **Diseño UI/UX:** Planificación de interfaz en Figma y gestión de activos en Canva.
* **Despliegue:** CI/CD mediante Netlify.

---

## Características Técnicas Destacadas

### 1. Sistema de Filtrado Dinámico (DOM Manipulation)
Se implementó un motor de navegación que gestiona la visualización de múltiples categorías mediante JavaScript. Esto permite una navegación fluida, tipo Single Page Application (SPA), evitando recargas innecesarias del navegador.

### 2. Arquitectura de Directorios Escalable
El proyecto sigue los estándares de la industria para la organización de archivos:
* `assets/`: Almacenamiento centralizado de recursos visuales optimizados.
* `css/`: Hojas de estilo modulares.
* `js/`: Lógica de comportamiento separada de la estructura.

---

## Estructura del Repositorio
```text
├── index.html           # Landing Page principal
├── productos.html       # Módulo de catálogo con lógica de filtrado
├── nosotros.html        # Información de identidad corporativa
├── contacto.html        # Canales de atención y formularios
├── css/
│   └── style.css        # Estilos globales y layouts responsivos
├── js/
│   └── script.js        # Lógica de manipulación del DOM
└── assets/              # Banco de imágenes de productos y logotipos
