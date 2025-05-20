const form = document.getElementById('loginForm');
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('errorMsg');

togglePassword.addEventListener('click', () => {
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
  togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = passwordInput.value;

  if (username === '' || password === '') {
    errorMsg.textContent = 'Please enter both username and password.';
  } else if(username === 'inspector' && password === 'admin') {
    window.location.href ='inspector.html'
  } else if(username === 'admin' && password === 'admin') {
    window.location.href ='admin.html'
  } else {
    errorMsg.textContent = '';
    window.location.href ='establishment-owners.html'
  }
});
