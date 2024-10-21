// Obtenemos los elementos del DOM
const form = document.getElementById('formContacto');
const contactModal = new bootstrap.Modal(document.getElementById('modalContacto'));
const contactInfo = document.getElementById('contactInfo');

// Función que maneja el envío del formulario
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Capturamos los valores del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const telefono = document.getElementById('telefono').value;
  const correo = document.getElementById('correo').value;
  const nota = document.getElementById('nota').value;

  // Creamos el objeto del nuevo contacto usando Spread Operator
  const nuevoContacto = { nombre, apellido, telefono, correo, nota };

  // Usamos destructuring para extraer los valores que necesitamos
  const { nombre: nombreContacto, apellido: apellidoContacto, telefono: fonoContacto, correo: emailContacto } = nuevoContacto;

  // Se muestra la información en el modal
  infoContacto.innerHTML = `
    Nombre: <strong>${nombreContacto} ${apellidoContacto}</strong><br>
    Correo: ${emailContacto}<br>
    Teléfono: ${fonoContacto}
  `;

  // Se abre el modal
  contactModal.show();
});
