// prototypal inheritance

var person = {

    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        console.log(this.firstname + " " + this.lastname);
    }

}

var john = {
    firstname: "Jhon"
};


// non si deve fare in produzione.. Solo per esercizio!!
john.__proto__ = person;

// john.getFullName();


// var a = {};
// var b = function() {};
// var c = [];

// Reflection: un oggetto può guardare dentro di se, listare e cambiare i propri meotdi e proprietà.
//hasOwnProperty è un metodo dell'oggetto prototipo base

for (var prop in john) {
    if(john.hasOwnProperty(prop)) {
        console.log("Proprietà: " + prop + ": " + john[prop]);
    }
    
}


function Car (numeroporte,colore,velocita,cilindrata) {

    this.numeroPorte = numeroporte;
    this.colore = colore;
    this.velocita = velocita;
    this.cilindrata = cilindrata;

}

Car.prototype.getVelocita = function () {
    return this.velocita;
}

var car1 = new Car(4, "blu metalizzato", "200km/h", 150);

console.log(car1);


var car2 = new Car(5, "verde", "300km/h", 180);

console.log(car2);

var car1Velocita = car1.getVelocita();
console.log(car1Velocita);

var car2Velocita = car2.getVelocita();
console.log(car2Velocita);


var j = Object.create(person); // con Object.create le proprieta in questo caso di person vanno a finire nel proto di un oggetto nuovo. 

j.firstname = "john";

console.log(j.firstname);

person.greet = function () {
    return "hi " + this.firstname;
}

console.log(j);


// person.prototype.getFormalName in questo caso non funziona

// person.prototype.getFormalName = function() {
//     return this.lastname + ", " + this.firstname;
// }