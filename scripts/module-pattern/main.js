//Module Pattern

var Main = (function(main) {

    
    // Dependecies-- Ci permette di avere un riferimento abbreviato al submodule
    var uDoc = Util.doc;
    

    var s = function() {
        console.log("main.s");
        console.log(Util.sum(1,1));

        console.log("jquery: " + jQuery);

        // Per evitare di dover scrivere per intero la proprietà cosi ---> "Util.doc.obj.name" ( lo posso fare perche Util è un namespace globale e quindi raggiungilbile), creo una dipendenza (vedi sopra) che mi permette di abbreviare il nome.
        //console.log(Util.doc.obj.name);

        console.log(uDoc.obj.name);
    }

    main.s = s;

    return main;

})(Main || {});