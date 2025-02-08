
const steps = document.querySelectorAll(".step");
const step1 = document.querySelector(".step-1 div"); 
const step2 = document.querySelector(".step-2 div");
const step3 = document.querySelector(".step-3 div");

const stepS = [step1, step2, step3]


const updateSteps = (progress) => {
    let active = 1; // how many steps are active
    
    steps.forEach((step) => {
        step.classList.remove("activeStep");
    });

    if (hasReachedLastStep(progress)){
        active = 3; 
    }
    else if(hasReachedSecondStep(progress)){
        active = 2; 
    }
    else {
        active = 1; 
    }

    stepS.forEach((step)=>{
        if(active > 0){
            step.classList.add("activeStep");
            active--; 
        }
        console.log(active); 
    }); 
}


document.addEventListener("scroll", function () {
    const progressElement = document.getElementById("progressElement");
    const rect = progressElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate how much of the element has appeared in the viewport
    const visibleHeight = Math.max(0, windowHeight - rect.top);
    const progress = Math.min(1, visibleHeight / rect.height);
    
    // Apply proportional background color
    const color = progress * 100 - 20; 
    progressElement.style.background = `linear-gradient(to bottom, #d4ae33 ${color}%, #fff ${Math.max(0, progress-100)}%)`;

    updateSteps(color); 
});


function hasReachedLastStep(progress){
    const progressElement = document.getElementById("progressElement").getBoundingClientRect();
    const stepRect = step3.getBoundingClientRect(); 
    const step3Pos = 100 - ((stepRect.height/progressElement.height) * 100);
    return progress >= step3Pos; 
}

function hasReachedSecondStep(progress){
    const progressElement = document.getElementById("progressElement").getBoundingClientRect();
    const stepRect = step2.getBoundingClientRect();
    const pos = stepRect.top - progressElement.top; 
    const step2Pos = (pos / progressElement.height) * 100;
    return progress >= step2Pos; 
}
