/* =====================================================
   SCRIPT PRINCIPAL DEL SITIO
   Contiene funciones globales y específicas por sección
===================================================== */

/* ==============================
   GLOBAL
============================== */

// Aquí puedes agregar funciones generales para todo el sitio,
// como animaciones de scroll, comportamiento del menú, etc.

/* ==============================
   HEADER
============================== */

// Ejemplo: si más adelante quieres un menú responsive o sticky, 
// puedes añadirlo aquí.

/* ==============================
   MAIN
============================== */
/* ==============================
   CARRUSEL (Funcional)
============================== */

document.addEventListener("DOMContentLoaded", () => {
  const carrusel = document.querySelector(".carrusel");
  if (!carrusel) return; // evita errores si el carrusel no existe

  const items = carrusel.querySelectorAll(".carrusel-item");
  const prevBtn = carrusel.querySelector(".carrusel-btn.prev");
  const nextBtn = carrusel.querySelector(".carrusel-btn.next");

  let indice = 0;
  const total = items.length;
  let intervalo;

  function mostrarImagen(index) {
    items.forEach((item, i) => {
      item.classList.toggle("activo", i === index);
    });
  }

  function siguiente() {
    indice = (indice + 1) % total;
    mostrarImagen(indice);
  }

  function anterior() {
    indice = (indice - 1 + total) % total;
    mostrarImagen(indice);
  }

  function iniciarCarrusel() {
    detenerCarrusel(); // evita duplicar intervalos
    intervalo = setInterval(siguiente, 4000);
  }

  function detenerCarrusel() {
    if (intervalo) clearInterval(intervalo);
  }

  // Eventos de botones
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      siguiente();
      iniciarCarrusel(); // reinicia el temporizador
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      anterior();
      iniciarCarrusel();
    });
  }

  // Opcional: pausa si el usuario pasa el mouse sobre el carrusel
  carrusel.addEventListener("mouseenter", detenerCarrusel);
  carrusel.addEventListener("mouseleave", iniciarCarrusel);

  // Inicialización
  mostrarImagen(indice);
  iniciarCarrusel();
});


/* ==============================
   FOOTER
============================== */

// Aquí podrías incluir funcionalidades futuras para el pie de página,
// como un botón de "volver arriba" o efectos visuales.
