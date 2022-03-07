const email = document.getElementById('email')
const password = document.getElementById('password')
const login = document.getElementById('login')
const loginElement = document.getElementById('login')

form.addEventListener('submit', (e) => {
  let messages = []
  if (email.value === '' || text.value == null) {
    alert('Email or Phone is required')
  }

  if (password.value.length <= 6) {
    alert('Password must be longer than 6 characters');
    return;
  }

  if (password.value.length >= 20) {
    alert('Password must be less than 20 characters');
  }

  if (password.value === 'password') {
    alert('Password cannot be password');
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})