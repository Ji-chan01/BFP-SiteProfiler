const form = document.getElementById('loginForm');
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('errorMsg');

// Show/hide password
togglePassword.addEventListener('click', () => {
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
  togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});

// Fake validation (customize this logic for real login)
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = passwordInput.value;

  if (username === '' || password === '') {
    errorMsg.textContent = 'Please enter both username and password.';
  } else {
    errorMsg.textContent = '';
    window.location.href ='index.html'
  }
});
