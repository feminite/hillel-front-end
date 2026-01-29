const form = document.querySelector('#contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    name: document.querySelector('#name').value.trim(),
    message: document.querySelector('#message').value.trim(),
    phone: document.querySelector('#phone').value.trim(),
    email: document.querySelector('#email').value.trim()
  };

  let isValid = true;
  
  if (!data.name) {
    document.querySelector('#nameError').textContent = 'required';
    isValid = false;
  }

  if (data.message.length < 5) {
    document.querySelector('#messageError').textContent = 'minimum 5 characters';
    isValid = false;
  }
  
  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(data.phone)) {
    document.querySelector('#phoneError').textContent = 'phone: +380XXXXXXXXX';
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    document.querySelector('#emailError').textContent = 'invalid email format';
    isValid = false;
  }


  if (isValid) {
    console.log(data);
    form.reset();
  }
});