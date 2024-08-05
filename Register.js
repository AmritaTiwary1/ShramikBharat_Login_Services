const loginButton = document.querySelector('.btn-worker>button'); 
const signupButton = document.querySelector('.btn-worker-seeker>button'); 
const btnContainer = document.querySelector('.btn-container');
const loginForm = document.querySelector('.login-form'); 
const signupForm = document.querySelector('.signup-form-container'); 


loginButton.onclick = e => {
    // disapperar the control btn
    btnContainer.style.display = 'none';
    
    // make login-form apperar 
    loginForm.style.left = '0px'; 
}

signupButton.onclick = e => {
    // disappear the control btn
    btnContainer.style.display = 'none'; 

    // make signup-form appear 
    signupForm.style.left = '0px'; 
}