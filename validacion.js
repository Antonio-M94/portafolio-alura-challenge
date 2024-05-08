/* Cambiar el color de los inputs y textarea */
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

/* Validación del formulario de contacto */
const form = document.querySelector('.formcontato__form');
const nombreInput = document.getElementById('name');
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
  } else {
    form.submit();
  }
});

// Agrega un event listener al campo de nombre para borrar el mensaje de error cuando se empiece a escribir en él
nombreInput.addEventListener('input', function () {
  warningMensaje.textContent = '';
});
