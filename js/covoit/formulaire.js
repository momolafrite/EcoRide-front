const inputNom = document.getElementById("DepartInput");
const inputDestination = document.getElementById("DestinationInput");
const inputDate = document.getElementById("DateInput"); 

inputNom.addEventListener("keyup", validateForm);
inputDestination.addEventListener("keyup", validateForm);
inputDate.addEventListener("input", validateForm);

function validateForm(){
    validateRequired(inputNom);
    validateRequired(inputDestination);
    validateRequired(inputDate);
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    }
    else{
       input.classList.remove("is-valid");
        input.classList.add("is-invalid"); 
    }
    
}
