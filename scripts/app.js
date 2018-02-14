function App (a,b) {

    this.elementToMove = $('.'+a);
    this.btnThatMove = $('#'+b);

    this.events();

}


App.prototype.getElementTomove = function() {

    return this.elementToMove;

}

App.prototype.moveElement = function() {

    this.elementToMove.animate({
        marginLeft: '+=' + '100px'
    },1000)
}



App.prototype.events = function () {
    console.log("events");
    //this.btnThatMove.click(this.moveElement.bind(this));

}



$(document).ready(function() {


    var app = new App('block1','move1');

    var bapp = new App('block2','move2');

    
    console.log(app.getElementTomove());

    console.log(bapp.getElementTomove());


});