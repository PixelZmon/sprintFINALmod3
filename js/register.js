document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('register-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      clearErrors();
      if(validateForm()) {
        submitForm();
      }
    });
    function validateForm() {

      let isValid = true; 
      const name = document.getElementById('name').value.trim();
      const surname = document.getElementById('surname').value.trim();
      const nickname = document.getElementById('nickname').value.trim();
      const email = document.getElementById('email').value.trim();
      const comment = document.getElementById('comment').value.trim();
  
      if(!validateLength(name, 2)) {
        setError('errorName', 'The name must be at least 2 characters');
        isValid = false;
      }
      if(!validateLength(surname, 2)) {
        setError('errorSurname', 'The surname must be at least 2 characters');
        isValid = false;
      }
      if(!validateLength(nickname, 5)) {
        setError('errorNickname', 'The nickname must be at least 5 characters');
        isValid = false;
      }
  
      if(!validateEmail(email)) {
        setError('errorEmail', 'Invalid email');
        isValid = false;
      }
  
      if(!validateLength(comment, 26)) {
        setError('errorComment', 'The comment must be at least 20 characters');
        isValid = false;
      }
  
      return isValid;
    }
  
    function validateLength(value, minLength) {
      return value.length >= minLength;
    }
  
    function validateEmail(email) {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
    }
  
    function setError(errorId, message) {
      const errorElement = document.getElementById(errorId);
      errorElement.textContent = message;
      errorElement.style.display = 'block';
  
    }
  
    //* Limpiar los mensajes de error
    function clearErrors() {

      const errorElements = document.querySelectorAll('.invalid-feedback');

      errorElements.forEach((element) => {
        element.style.display = 'none';
      });
    }
  

    function submitForm() {
      alert('Congratulations! Registered Successfully')
    }
  });