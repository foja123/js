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


  // Safe constructor

  var User = function(firstname, lastname) {
    if(this instanceof User) {
      this.firstname = firstname;
      this.lastname = lastname;
    } else {
      return new User(firstname, lastname);
    }
  }

  var user1 = User("A", "B");




  // Dati primitivi come number e string hanno un loro oggetto wrapper che è il loro prototype ------ prototype dell'oggetto wrapper della stringa e del number

  // Si può modificare il built in prototype di oggetti, funzioni, array etc ma non è una buona pratica