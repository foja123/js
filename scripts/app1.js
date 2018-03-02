// var o = O$({
//     overlayId: "idmodale",
//     overlayColor: "#f00"
// });

// o.open().close();



//O$({overlayColor:"#f00"}).open().close();


$(document).ready(function() {
    // var o = O$({
    //     overlayColor: "#f00"
    // });
    $('.openmodal').on('click', function(e) {
        e.preventDefault();
        basicOverlay();
    });

    $('#example1').basicOverlay();
    $('#example2').basicOverlay({
        content: "#modal1"
    });
});


