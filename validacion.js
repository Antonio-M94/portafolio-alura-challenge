// Cambiar el color de los inputs y textarea
const inputs = document.querySelectorAll('input');
const textareas = document.querySelectorAll('textarea');

inputs.forEach((input) => {
  const label = document.querySelector(`label[for="${input.id}"]`);
  input.addEventListener('input', function () {
    label.style.color = input.value === '' ? '#fff' : '#2a7ae4';
  });
});

textareas.forEach((textarea) => {
  const label = document.querySelector(`label[for="${textarea.id}"]`);
  textarea.addEventListener('input', function () {
    label.style.color = textarea.value === '' ? '#fff' : '#2a7ae4';
  });
});

// Validación del formulario de contacto
const form = document.querySelector('.formcontato__form');
const nombreInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const asuntoInput = document.getElementById('asunto');
const mensajeTextarea = document.getElementById('mensaje');
const warningMensaje = document.querySelector(
  '.formcontacto__formulario_warning'
);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (nombreInput.value.trim() === '') {
    warningMensaje.textContent = 'Por favor, ingresa tu nombre.';
    nombreInput.focus();
  } else if (nombreInput.value.length > 50) {
    warningMensaje.textContent = 'El nombre debe tener máximo 50 caracteres.';
    nombreInput.focus();
  } else if (emailInput.value.trim() === '') {
    warningMensaje.textContent = 'Por favor, ingresa tu correo electrónico.';
    emailInput.focus();
  } else if (!validateEmail(emailInput.value.trim())) {
    warningMensaje.textContent =
      'Por favor, ingresa un correo electrónico válido.';
    emailInput.focus();
  } else if (asuntoInput.value.trim() === '') {
    warningMensaje.textContent = 'Por favor, ingresa un asunto.';
    asuntoInput.focus();
  } else if (asuntoInput.value.length > 50) {
    warningMensaje.textContent = 'El asunto debe tener máximo 50 caracteres.';
    asuntoInput.focus();
  } else if (mensajeTextarea.value.trim() === '') {
    warningMensaje.textContent = 'Por favor, ingresa un mensaje.';
    mensajeTextarea.focus();
  } else if (mensajeTextarea.value.length > 300) {
    warningMensaje.textContent = 'El mensaje debe tener máximo 300 caracteres.';
    mensajeTextarea.focus();
  } else {
    form.submit();
  }
});

// Agrega un event listener al campo de nombre y correo electrónico para borrar el mensaje de error cuando se empiece a escribir en ellos
nombreInput.addEventListener('input', clearWarningMessage);
emailInput.addEventListener('input', clearWarningMessage);

// Función para validar el formato del correo electrónico
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Función para borrar el mensaje de advertencia
function clearWarningMessage() {
  warningMensaje.textContent = '';
}
