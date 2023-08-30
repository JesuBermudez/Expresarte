function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        Math.abs(rect.y) < 300 
    );
}

// Función para agregar estilo a un enlace si está en pantalla
function addStyleToLinkIfVisible() {
    var sections = document.querySelectorAll("section"); // Selecciona todos los elementos <section>

    sections.forEach(function (section) {
        if (isElementInViewport(section)) {

            if (parseInt(document.querySelector("footer").getBoundingClientRect().bottom) <= (window.innerHeight || document.documentElement.clientHeight)) {

                var link = document.querySelector(".a-contacto"); // Selecciona el <a> con esa clase
                link.classList.add("active"); // Agrega una clase de estilo cuando footer está en pantalla

                link = document.querySelector(`.a-${section.id}`); // Selecciona el <a> con esa clase
                link && link.classList.remove("active"); // Elimina la clase de estilo cuando footer esta en pantalla

            } else {
                var link = document.querySelector(".a-contacto"); // Selecciona el <a> con esa clase
                link.classList.remove("active"); // Elimina la clase de estilo cuando footer no esta en pantalla

                link = document.querySelector(`.a-${section.id}`); // Selecciona el <a> con esa clase
                
                link && link.classList.add("active"); // Agrega una clase de estilo cuando está en pantalla
            }
            
        } else {
            var link = document.querySelector(`.a-${section.id}`); // Selecciona el <a> con esa clase
            link && link.classList.remove("active"); // Elimina la clase de estilo cuando no está en pantalla
        }
    });
}

// Agregar un evento de desplazamiento (scroll) para comprobar constantemente si los elementos están en pantalla
window.addEventListener("scroll", addStyleToLinkIfVisible);

// Llamar a la función al cargar la página para aplicar el estilo inicial
addStyleToLinkIfVisible();