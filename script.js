const loginBtn = document.querySelector('.login-btn');

loginBtn.addEventListener('click', () => {
  document.body.classList.toggle('logged-in');
});