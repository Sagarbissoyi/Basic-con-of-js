
// let arr=[10,[20,30],40,50,[60,70,80],90];

// let x = arr.reduce((flatArray,value)=>{
//  console.log(flatArray)
// // return flatArray.push(value);
//  return [...flatArray,...value]
// },[]);
// console.log(x)



let arr=[10,11,12,13,14,15,16,17,18,19,20];
 let map_arr = arr.map((value,index) =>{
    return value%2==0
 })

console.log(map_arr)
// it will return calculated value as it is, or true or false



