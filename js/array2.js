let arr = [2, 4, 6, 8, 10]
let arr2 = [];
 arr2 = Math.ceil(arr.length / 2);    

let firstHalf = arr.slice(0, arr2)
let secondHalf = arr.slice(-arr2)

console.log(arr)

console.log(arr2)

console.log(firstHalf)

console.log(secondHalf)



let arr = [2,4,6,8,10]
undefined
let newArr = arr.map(myFunction)
  function myFunction (arr){
      return arr/2  ;
  }

newArr
[1, 2, 3, 4, 5]


[56,12,44,77,100].map((arr)=>{
    return arr/2  ;
})
[28, 6, 22, 38.5, 50]
[56,12,44,77,100].map(function(arr){
    return arr/2  ;
})
[28, 6, 22, 38.5, 50]