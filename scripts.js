document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      var contenido = document.querySelector(".contenido");
      var scrollPos = window.scrollY;
  
      // Calcula la opacidad basada en la posición de desplazamiento
      var opacity = 1 - scrollPos / 3500;
  
      // Limita la opacidad entre 0 y 1
      if (opacity >= 0) {
        contenido.style.opacity = opacity;
      }
  
      // Añade o elimina la clase para ocultar completamente el contenido
      if (scrollPos >= 3500) {
        contenido.classList.add("opacidad-cero");
      } else {
        contenido.classList.remove("opacidad-cero");
      }
    });
  });