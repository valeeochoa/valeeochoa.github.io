/*const navbarToggle = document.querySelector('.navbar-toggle');
const navbarItems = document.querySelector('.navbar-items');

navbarToggle.addEventListener('click', () => {
  navbarItems.classList.toggle('responsive');
});*/
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarItems = document.querySelector('.navbar-items');

navbarToggle.addEventListener('click', () => {
  navbarItems.classList.toggle('show');
});

// Scroll suave al hacer clic en el enlace "Volver arriba"
const goToTopElement = document.getElementById("goToTop");
goToTopElement.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// Obtener el elemento del año actual
const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = `© ${currentYear} - Todos los derechos reservados`;
