const passwordBox = document.getElementById("password");
//const lenght = 12;
const upperCase = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const simbolos = "!#$%&/()=?¡*|><"
const allChars = upperCase + lowerCase + simbolos;


function createPassword(){
                const lenghtValue = document.getElementById("cantidad").value;
                console.log(lenghtValue)
                let password="";
                password += upperCase[Math.floor(Math.random() * upperCase.length)];
                password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
                password += simbolos[Math.floor(Math.random() * simbolos.length)];
                while(lenghtValue > password.length){
                    password += allChars[Math.floor(Math.random() * allChars.length)];
                }
                passwordBox.value = password;
                document.querySelector(".aviso").style.display = "none";
                
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    document.querySelector(".aviso").style.display = "block";
 }

document.querySelector("span").onmouseover = event =>{
    let iterations = 0;
    const interval = setInterval(()=>{
        event.target.innerText = event.target.innerText.split("").map((letter, index) => {
            if(index < iterations){
                return event.target.dataset.value[index];
            }            
            return upperCase[Math.floor(Math.random()*26)]}).join("");
            if(iterations >= event.target.dataset.value.lenght) {
                clearInterval(interval);
            }
            iterations += 1/4;
    }, 30);
    console.log(iterations);
}