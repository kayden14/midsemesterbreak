let input = document.getElementById('number')
let button = document.getElementsByClassName('btn')[0]
let para = document.querySelector('p')
  function convertToRoman() {
    let newArr = [];
    let num = input.value
    num = num.toString();
    let units = ["","I","II","III","IV","V","VI","VII","VIII","IX"]
                    
            let tens = ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]  
            
            let hundreds = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]     
            
            let thousands = ["", "M", "MM", "MMM"]
                if(num.length === 1){
                    results =  newArr.push(units[num[0]]);
                }
                if(num.length === 2){
                    results =  newArr.push(tens[num[0]]+units[num[1]]);
                }
                if(num.length === 3){
                    results =  newArr.push(hundreds[num[0]]+ tens[num[1]] + units[num[2]]);
                }
                if(num.length === 4){
                  results =  newArr.push(thousands[num[0]] + hundreds[num[1]]+ tens[num[2]] + units[num[3]]);
                }
              para.textContent = newArr
              para.style.color = 'black' 
            }
            button.addEventListener('click', convertToRoman)