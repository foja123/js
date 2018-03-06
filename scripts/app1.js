var o = O$({
    overlayId: "idmodale0",
    overlayColor: "#f00"
});

// var o1 = O$({
//     overlayId: "idmodale",
//     overlayColor: "#f26"
// });

//o.open().close();



//O$({overlayColor:"#f00"}).open().close();


$(document).ready(function() {
    // var o = O$({
    //     overlayColor: "#f00"
    // });
    $('.openmodal').on('click', function(e) {
        e.preventDefault();
        basicOverlay();
    });

    $('#example1').overLay({
        //overlayId: "idmodale",
        overlayColor: "#0ff"
       
    });
    $('#example2').basicOverlay({
        content: "#modal1",
        after: function() {
            
        }
    });

    $('h2').helloWorld({
        text        : 'Salut, le monde!',
        color       : '#005dff',
        fontStyle   : 'italic'
    });
});


