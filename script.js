document.addEventListener("DOMContentLoaded", function () {
    // Función para mostrar mensaje al enviar correo
    function mostrarMensajeCorreo(event) {
      event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
  
      // Mostrar mensaje de confirmacion
      mensajeConfirmacion.style.opacity = "1";
  
      // Poner un tiempo de espera para cerrar luego el mensaje
      setTimeout(() => {
        mensajeConfirmacion.style.opacity = "0";
      }, 5000);
    }
  
    // Obtener el formulario de contacto
    var formularioContacto = document.getElementById("formulario-correo");
    var mensajeConfirmacion = document.getElementById("mensaje-confirmacion");
  
    // Agregar un evento de envío al formulario de contacto
    formularioContacto.addEventListener("submit", mostrarMensajeCorreo);
  });