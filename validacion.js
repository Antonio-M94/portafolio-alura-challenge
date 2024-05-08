/* Cambiar el color de los inputs y textarea */

// Selecciona todos los elementos input y textarea
const inputs = document.querySelectorAll('input');
const textareas = document.querySelectorAll('textarea');

// Itera sobre todos los inputs y agrega el evento input a cada uno
inputs.forEach((input) => {
  const label = document.querySelector(`label[for="${input.id}"]`);
  input.addEventListener('input', function () {
    if (input.value === '') {
      label.style.color = '#fff';
    } else {
      label.style.color = '#2a7ae4';
    }
  });
});

// Itera sobre todos los textareas y agrega el evento input a cada uno
textareas.forEach((textarea) => {
  const label = document.querySelector(`label[for="${textarea.id}"]`);
  textarea.addEventListener('input', function () {
    if (textarea.value === '') {
      label.style.color = '#fff';
    } else {
      label.style.color = '#2a7ae4';
    }
  });
});
