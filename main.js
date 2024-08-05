/* Open register.html file on click of register button  */

const registerButton = document.querySelector('.register-btn'); 
registerButton.onclick = e => {
  window.location.href = './register.html'; 
}