//function statement
function greet() {
    console.log("name");
}

// function expressione
var greet2 = function()  {
    console.log("name2");
    var asd = "asd";
}

greet2();

//console.log(this.asd);

// IIFE Imediatly Invoked Function Expression
var greeting = function (name, surname) {
    return [name, surname];
}("Andrea", "Serafin");

console.log(greeting[0]);

// Se non si mettono le prime due parentesi il syntax parser restituisce un errore perche si aspetta che la funzione sia una function statement quindi con un nome. Con le parentesi invece si riesce ad ottenere una function expression. perche quello che sta nelle parentesi è un'espressione.

//Il codice scritto in una IIFE vive di vita propria e non va ad intaccare il global execution context. Crea il proprio execution context in cui le variabili interne all'iife non vanno ad attaccarsi al window globale.

(function(a) {
   var stato = "this is a IIFE";
   console.log(stato + " " + a);
}("Andrea"));

console.log(this.stato); //undefined


