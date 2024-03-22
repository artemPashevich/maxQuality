document.getElementById('togglePassword').addEventListener('click', function (e) {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    this.src = type === 'password' ? '../static/src/eyeOpen.png' : '../static/src/eyeClose.png';
  });
  