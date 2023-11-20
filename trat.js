// // ______________ animaciones _______________

// Función para verificar si un elemento está en el área visible de la pantalla
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

  // Función para manejar el desplazamiento y mostrar elementos cuando son visibles
function handleScroll() {
    const lista = document.getElementById('lista');
    const elementos = lista.querySelectorAll('li');

    elementos.forEach((elemento) => {
    if (isInViewport(elemento)) {
        elemento.classList.add('show');
    }
    });
}

  // Agrega un listener de scroll para llamar a la función handleScroll
document.addEventListener('scroll', handleScroll);

  // Llama a handleScroll una vez al cargar la página para mostrar elementos iniciales
handleScroll();
// // // ______________ animaciones _______________
