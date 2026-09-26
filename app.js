// Interactividad de la landing page: un saludo personalizado al visitante.
document.addEventListener('DOMContentLoaded', function () {
  var botonSaludo = document.getElementById('btn-saludo');

  if (botonSaludo) {
    botonSaludo.addEventListener('click', function () {
      var nombre = window.prompt('¿Cómo te llamas?');

      if (nombre && nombre.trim() !== '') {
        alert('¡Hola, ' + nombre.trim() + '! Gracias por visitar Estudio Faro.');
      } else {
        alert('¡Hola! Gracias por visitar Estudio Faro.');
      }
    });
  }
});
