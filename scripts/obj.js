var Greeting = function(name,surname) {
    
    this.name = name;
    this.surname = surname;
    
  }
  
  var greetProto = {
    
     greeting: function() {
         
       console.log("Hello " + this.name + " " + this.surname);
       
     }
    
  }
  
  Greeting.prototype = greetProto;
  Greeting.prototype.constructor = Greeting;
  
  var obj1 = new Greeting("A" , "B");
  
  obj1.greeting();
  
  console.log(obj1);