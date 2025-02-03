// let sag={
// age:"21",
// class:"gradute",
// village:"bod-olma",
// gender:"male"
// }

// console.log(sag.age);
// console.log(sag.class);
// console.log(sag.village);
// console.log(sag.gender);
// const arr1=[1,2,3,4]
// const arr2=[1,2,6,...arr1]
// console.log(arr2)
// const copy2=[...arr1,...arr2,5,6,7,8]
// console.log(copy2)

// let obj={

//     firstname:"sagar",
//     lastname:"bissoyi",
// }
// let printfullname=function(){
//     console.log(this.firstname + "" + this.lastname)
// }

// printfullname.call(obj)


// let sag={

// village:"bod-olma",
// city:"ngp"


// }
// let printall=function(){
//     console.log(this.city + " " + this.village)
// }
// printall.call(sag)




// const userDetails = {
//     name: "John Doe",
//     age: 14,
//     verified: false
//     };
    
    
//     const cloneUser = JSON.parse(JSON.stringify(userDetails));
    
//     cloneUser.name = "fdjka";
//     console.log(cloneUser.name);
   
    
    
//     console.log(userDetails.name);//no change in original obj name



name=["sagar","kabir","sujeet"];
namesCopy=[...name];

console.log(namesCopy)