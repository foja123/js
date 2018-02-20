// closure

// Fenomeno intrinsico al linguaggio.

//quando la funzione ritornata da una funzione ha la capacità di ricordare la variabile della funzione padre anche se questa ha già finito il suo execution context ed è fuori dall'execution stack

//Ogni volta che viene invocata una funzione essa crea il proprio execution context!! E ogni funzione creata dentro di essa punta a quell'exexution context. Punta allo spazio di memoria "lasciato" dalla funzione anche quando il suo execution context è scomparso.


function direqualcosa (cosadire) {

    return function (chilodice) {
        console.log(chilodice + " dice " + cosadire);
    }

}


direqualcosa("imparo js")("Andrea");

var a = direqualcosa("imparo js");

a("Andrea");


function multiplicator(a) {

    return function(b) {
        return a*b;
    }

}

var b = multiplicator(5)(2);
console.log(b);




function makeGreet (lang) {

    return function (nome, cognome) {
        
        if(lang === "it") {
            console.log("Ciao " + nome + " " + cognome);
        }
        if(lang === "en") {
            console.log("Hello " + nome + " " + cognome);
        }

    }
}

var greetIta = makeGreet("it"); // A Questo punto parte l'execution context di makeGreet e salva il risultato della funzione dentro greetIta.
var greetEng = makeGreet("en"); // Parte un altro execution context di makeGreet e salva il risultato della funzione dentro greetEng.

greetIta("Andrea", "Serafin"); // A questo punto il JS Engine punta all'execution context di makeGreet("it") e si forma una closure. Infatti sebbene l'execution context di makeGreet("it") sia finito.. greetIta punta al suo outer environment e trova ancora la variabile it passata in precedenza. 
//Ogni funzione creata dentro una funzione punta all'exectution context della funzione padre.
greetEng("Andrea", "Serafin");




function buildFunctions() {

    var arr = [];

    for(var i = 0; i < 3; i++) {

        arr.push(
            function() {
               console.log(i); 
            }
        )

    }

    return arr;
}

var f = buildFunctions();

console.log(f);
f[0](); //L'output di queste 3 funzioni sarà 3.. perche nel momento in cui vengono invocate l'execution context che le ha create sarà 3 (Nel momento in cui restituisco l'array)
f[1]();
f[2]();

function buildFunctions2() {
    
        var arr = [];
    
        for(var i = 0; i < 3; i++) {
    
            arr.push(
                (function(j) {
                    return function () {
                        console.log('j: ' + j);
                        console.log('j: ' + j*Math.PI);
                    }
                }(i))
            )
    
        }
    
        return arr;
    }
    
    var f2 = buildFunctions2();
    
    console.log(f);
    f2[0](); //Per preservare il valore di i bisogna trovare il modo di isolare gli exectution context delle funzioni in modo tale da averne accesso nel momento in cui vengono ivocate, Per fare questo si puo utilizzare una IIFE (vedi sopra) che crea degli execution context separati.
    f2[1]();
    f2[2]();