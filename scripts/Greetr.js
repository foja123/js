
// safe code.. non viene interferito con l'esterno.. creo un proprio execution context passandogli window e l'oggetto jquery per poterlo usare all'interno della mia library.. Vogliamo settare un oggetto Greetr che alla fine venga restituito con tutta una serie di proprietà e metodi
(function(global, $) {

    var Greetr = function(firstname, lastname, language) {

        // cosi facendo non devo ogni volta istanziare un oggetto Greetr con la keyword new
        return new Greetr.init(firstname,lastname,language);
    }

    // Setto alcune variabili interne che non vengono esposte o ritornate dall'oggetto ma che mi servono per costruire la funzionalità. Nessuno dall'esterno le può vedere. Grazie alle closure queste variabili sono disponibili anche quando la funzione è stata istanziata ed ha finito il suo ciclo di vita.

    var supportedLangs = ['it', 'en'];

    var greetings = {
        it: "Ciao",
        en: "Hello"
    }; 

    var formalGreetings = {
        it: "Buongiorno",
        en: "Good morning"
    };

    var logMessages = {
        it: "Inizio sessione",
        en: "Logged in"
    };


    // Setto un oggetto dove metterò tutti i metodi. Questo verrà agganciato al prototype di Greetr
    Greetr.proto = {

        fullName: function() {
            return this.firstname + ' ' + this.lastname;
        },

        validateLangs: function() {
            if(supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }   
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstname + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ' ' + this.fullName();
        },

        greet: function(formal) {
            var msg;
            if(formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            if(console) {
                console.log(msg);
            }

            // ritorno l'oggetto Greetr in modo tale da poter collegare il metodo ad un altro.
            return this;

        },

        setLang: function(lang) {
            this.language = lang;

            this.validateLangs();

            return this;
        } 







    };

    Greetr.proto.a = function() {
        console.log("metodo di Greetr");
    }

    Greetr.init = function(firstname, lastname, language) {
        // function constructor per costruire l'oggetto
        
        // this punta all'oggetto vuoto ritornato chiamando la Greetr function
        var self = this;

        //Definisco alcune proprietà dell'oggetto che verrà ritornato con "return new Greet.init" invocando la funzione Greetr
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'it';

        console.log("lang :" + self.language);

    }

    // Setto il prototype Greet a Greet.proto
    Greetr.init.prototype = Greetr.proto;

    //Espongo l'oggetto Greetr al mondo esterno attancandolo al global.. cioè all'oggetto window e utilizzo un alias G$
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));