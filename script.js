const pass1 = document.querySelector('#password');
const passContainer = document.querySelector('.password-container');
const pass2 = document.querySelector('#c-password');
const error = document.createElement('p');
function checkPassword() {
  if (pass1.value == pass2.value) {
    pass1.setCustomValidity('');
    pass2.setCustomValidity('');
    passContainer.removeChild(error);
  } else {
    pass1.setCustomValidity('Passwords dont match');
    pass2.setCustomValidity('Passwords dont match');
    error.textContent = '*Passwords do not match';
    error.classList = 'error';
    pass1.after(error);
  }
}
pass1.addEventListener('change', checkPassword);
pass2.addEventListener('change', checkPassword);
