// hamburger menu

const nav = document.querySelector(".navbar");
const hambtn = document.querySelector(".hamburger");
hambtn.addEventListener("click", () => {
	nav.classList.add("active");
});

const crossbtn = document.querySelector(".cross");
crossbtn.addEventListener("click", () => {
	nav.classList.remove("active");
});

// /* Open register.html file on click of register button  */

// const registerButton = document.querySelector('.register-btn');
// registerButton.onclick = e => {
//   window.location.href = './register.html';
// }
