let arr3 = ['faith','emeka','jude'];
undefined
function capitalizeWords(arr3) {
  return arr3.map(element => {
    return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
  });
}

console.log(capitalizeWords(arr3));
 

let capital = (ar)=>{
  arr = [];
for(let x of ar){
  let n = x.toLowerCase()
  n = n.replace(n[0], n[0].toUpperCase())
  arr.push(n)
}
  return arr
}

let division = (arr)=>{
  arr2= [];
  for (let x of arr){
  
  arr2.push(x/2)
  }
  return arr2
} 

let arr = [2, 4, 6, 8, 10]
let arr2 = [];
 arr2 = Math.ceil(arr.length / 2);    

let firstHalf = arr.slice(0, arr2)
let secondHalf = arr.slice(-arr2)

console.log(arr)

console.log(arr2)

console.log(firstHalf)

console.log(secondHalf)


