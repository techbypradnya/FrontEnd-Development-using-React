let inputBox = document.getElementById("password");
let spanText = document.getElementById("strength");
let paragraphElement = document.getElementById('message');

inputBox.addEventListener('input',()=>{
    // let inputValue = inputBox.value; 
    // paragraphElement.style.display = 'block'

    if(inputBox.value.length === 0){
        paragraphElement.style.display = 'none'

    }else{
        paragraphElement.style.display = 'block';
    }
   

    if(inputBox.value.length <5){

        spanText.textContent = "Weak";
        inputBox.style.borderColor = 'red'
        paragraphElement.style.color = 'red'
    }else if(inputBox.value.length < 10){
          spanText.textContent = "Moderate";
          inputBox.style.borderColor = 'yellow'
        paragraphElement.style.color = 'yellow'


        
    }else{
                  spanText.textContent = "Strong";
                  inputBox.style.borderColor = 'green'
        paragraphElement.style.color = 'green'


    }

    
})