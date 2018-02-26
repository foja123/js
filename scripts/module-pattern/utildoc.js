var Util = (function(ud) {

    // Set up for sub module
    // Faccio cosi per avere un sub module all'interno dell'oggetto util (Util.doc.obj)
    var sub = ud.doc = ud.doc || {};


    var obj = {
        name: "A",
        surname: "B"
    }

    var init = function() {
        console.log(Util.sum(10,10))
    }

    //Metodi pubblici e propeietà 

    sub.obj = obj;
    sub.init = init;

    return ud;

})(Util || {});