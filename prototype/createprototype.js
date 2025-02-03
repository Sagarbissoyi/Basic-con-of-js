let name = {
    firstname : "montu",
    lastname : "churia",
   }
   
   
   let printfullname = function(){
    console.log(this.firstname + " " + this.lastname );
   }
   
   
//    let fun = printfullname.bind(name); //every function has access to bind
//    fun(); //fun is the new function returned.
   
   
   Function.prototype.mybind = function(...args){ //Function.prototype gices access mybind to every function
      let obj = this; //this is pointing to printfullname. obj is equal to printfullname fn
     
      return function () {
          obj.call(args[0]); //args[0] contains name(this keyword to object)
      }
   }
   let fun2 = printfullname.mybind(name);
fun2();