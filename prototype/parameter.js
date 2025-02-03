
let name = {
    firstname : "Paul",
    lastname : "Phoenix",
   }
   



let printfullname = function(name){
    console.log(this.firstname + " " + this.lastname +" "+name );
    }
    
    
    
    Function.prototype.mybind = function(...args){ //Function.prototype gices access mybind to every function
      let obj = this; //this is pointing to printfullname. obj is equal to printfullname fn
      params = args.slice(1); //slicing parameters from this.(name object)
      return function () {
          obj.apply(args[0],params); //args[0] contains name(this keyword to object)
      }
    }
    
    
    
    
    let fun2 = printfullname.mybind(name,"djas");
    fun2();