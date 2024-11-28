
function confirmarCerrarSesion() {
  // Ventana emergente de confirmación
  const confirmar = confirm("¿Estás seguro de que deseas cerrar sesión?");
  if (confirmar) {
      // Si el usuario confirma, redirige a la página de inicio o cierre de sesión
      location.href = '../../index.html';
  }
  // Si no confirma, no hace nada
}