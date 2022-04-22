function palindrome(str) {
    let myRegex = /[a-z0-9]/i;
    let arr = [];
    str = str.toLowerCase();
    for(let i=0; i<str.length; i++){
     if (myRegex.test(str[i])){
       arr.push(str[i]);  
     }    
    }
    let newArr = arr.slice();
    newArr.reverse();
  return newArr.join('')===arr.join('')
  }
  palindrome("eye");