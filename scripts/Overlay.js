(function(global, $) {


    var Overlay = function(options) {
        return new Overlay.init(options);
    };

    var objConfig = {
        overlayId: 'basicOverlay',
        overlayColor: '#000000',
        overlayOpacity: 0.5,
        closable: true,
        externalPage: '',
        content: '#modal',
        before: null,
        after: null,
        onClose: null,
        afterClose: null
    }
   

    //Overlay proto
    Overlay.proto = {
        open: function() {
            console.log("overlay open");

            return this;
        },
        close: function(id) {
            console.log("overlay close");
            this.remove(id);
            
        }


    };


    Overlay.init = function(options) {

        this.options =  $.extend({}, objConfig, options) || objConfig;

        var bodyHeight = $('body').outerHeight(),
            viewportHeight = $(window).height();

        //Modal inizialization
        $("body").append("<div id='"+ this.options.overlayId +"' class='aaas'></div>");
        $("#"+this.options.overlayId).css({
            'position' : 'fixed',
            'backgroundColor' : this.options.overlayColor,
            'opacity' : this.options.overlayOpacity,
            'width' : '100%',
            'height': '100%',
            'top' : '0',
            'left' : '0'
        });


        console.log('overlaycolor: ' + this.options.overlayColor);
        console.log('overlay init');
    }; 

    Overlay.init.prototype = Overlay.proto;

    global.Overlay = global.O$ = Overlay;


})(window, jQuery);