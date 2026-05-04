// Función para controlar las pestañas del catálogo
function abrirPestana(evento, idPestana) {
    // 1. Ocultar todo el contenido de las pestañas
    let contenidos = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contenidos.length; i++) {
        contenidos[i].style.display = "none";
        // Quitamos la clase 'active' por si acaso
        contenidos[i].classList.remove("active");
    }

    // 2. Quitar el color activo (Naranja) de todos los botones
    let botones = document.getElementsByClassName("tab-button");
    for (let i = 0; i < botones.length; i++) {
        botones[i].classList.remove("active");
    }

    // 3. Mostrar la pestaña específica que el usuario clickeó
    document.getElementById(idPestana).style.display = "block";
    
    // 4. Añadir la clase 'active' al botón clickeado para que se ponga Naranja
    evento.currentTarget.classList.add("active");
}

/**
 * Muestra el catálogo de una categoría específica y oculta el menú principal
 * @param {string} id - ID de la sección a mostrar
 * @param {string} nombre - Nombre para actualizar el título
 */
function mostrarCatalogo(id, nombre) {
    // 1. Ocultamos el menú de categorías
    document.getElementById('vista-categorias').style.display = 'none';
    
    // 2. Ocultamos todas las secciones de productos (por si había otra abierta)
    const secciones = document.querySelectorAll('.seccion-productos');
    secciones.forEach(sec => sec.style.display = 'none');

    // 3. Mostramos la sección elegida
    document.getElementById(id).style.display = 'block';

    // 4. Mostramos el botón de regresar y actualizamos el título
    document.getElementById('btn-regresar').style.display = 'block';
    document.getElementById('titulo-pagina').innerText = nombre;

    // Subir el scroll al inicio automáticamente
    window.scrollTo(0, 0);
}

/**
 * Regresa al menú principal de categorías
 */
function volverACategorias() {
    // 1. Mostramos el menú de categorías
    document.getElementById('vista-categorias').style.display = 'grid';
    
    // 2. Ocultamos todas las secciones de productos
    const secciones = document.querySelectorAll('.seccion-productos');
    secciones.forEach(sec => sec.style.display = 'none');

    // 3. Ocultamos el botón de regresar y restablecemos el título
    document.getElementById('btn-regresar').style.display = 'none';
    document.getElementById('titulo-pagina').innerText = "Categorías de Productos";
}
