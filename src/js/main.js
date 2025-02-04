// hamburger menu 

const nav = document.querySelector('.navbar')
const hambtn = document.querySelector('.hamburger');
hambtn.addEventListener('click', () => {
  alert("hello")
nav.classList.toggle('active');
})


// /* Open register.html file on click of register button  */

// const registerButton = document.querySelector('.register-btn'); 
// registerButton.onclick = e => {
//   window.location.href = './register.html'; 
// }