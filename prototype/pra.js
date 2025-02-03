const classDetails={
    name:"fourthclass",
    age:12,
    verified:true,

};
const newobj = {...classDetails};
newobj.name="sixclass";
console.log(classDetails.name);
console.log(newobj.name);








Object.assign({},OriginalObj)
let clone = Object.assign({}, userDetails)