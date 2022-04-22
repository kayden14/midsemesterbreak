// window.onload = () => {
    let button = document.querySelector("#btn");
    function calculateBMI() {
    let height =document.querySelector("#height").value;
    let weight =document.querySelector("#weight").value;
    let underWeight = document.getElementsByClassName("underweight")[0]
    let normal = document.getElementsByClassName("normal")[0]
    let overWeight = document.getElementsByClassName("overweight")[0]
    let obesity = document.getElementsByClassName("obesity")[0]
    let para = document.querySelector("p") 
       
        height = (height/100) * (height / 100)
    
        let bmi = Number((weight/height).toFixed(2))
        
    if(bmi <= 19){
        para.textContent = `Your bmi is ${bmi}kg/m², you need to add ${(19 - bmi).toFixed(2)}kg`;
        underWeight.style.display = "block"
        normal.style.display = "none"
        overWeight.style.display = "none"
        obesity.style.display = "none"
        
        para.style.backgroundColor = "red"
    }
    else if(bmi <= 25 ){
        para.textContent = `Your bmi is ${bmi}kg/m², you need to keep up the good habit`;
        normal.style.display = "block"
        para.style.backgroundColor = "green"
        overWeight.style.display = "none"
        obesity.style.display = "none"
        underWeight.style.display = "none"
        
        
    }
    else if(bmi <= 30 ){
        para.textContent =  para.textContent = `Your bmi is ${bmi}kg/m², you need to lose ${(30 - bmi).toFixed(2)}kg`;
        overWeight.style.display = "block"
        para.style.backgroundColor = "yellow"
        obesity.style.display = "none"
        normal.style.display = "none"
        underWeight.style.display = "none"
        
    }    
    else{
        para.textContent = para.textContent = `Your bmi is ${bmi}kg/m², you need to lose ${(40 - bmi).toFixed(2)}kg`
        obesity.style.display = "block"
        para.style.backgroundColor = "red"
        overWeight.style.display = "none"
        normal.style.display = "none"
        underWeight.style.display = "none"
        
    }
    
    
}
button.addEventListener("click", calculateBMI);
let newButton = document.querySelector("#btn2")
newButton.addEventListener("click", () =>{
    document.querySelector("#height").value = 0;
    document.querySelector("#weight").value = 0;
    underWeight.textContent = "";
    obesity.textContent = "";
    normal.textContent = '';
    overWeight.textContent = '';
    para.textContent = '';
    // button.removeEventListener("click",calculateBMI)
       
    // alert(height)
})