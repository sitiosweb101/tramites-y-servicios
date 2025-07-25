document.addEventListener('DOMContentLoaded', () => {
  // Obtén la ruta actual (solo el path)
  const currentPath = window.location.pathname;
  
  // Selecciona todos los enlaces de la barra
  const navLinks = document.querySelectorAll('.topnav a[href]');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    // Igualdad exacta o coincidencia final (por si usas rutas relativas)
    if (
      linkPath === currentPath ||
      (linkPath !== '/' && currentPath.endsWith(linkPath))
    ) {
      link.classList.add('active');
    }
  });
});



//funcion para navbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
