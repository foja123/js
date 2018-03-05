(function(global, $) {


    var Overlay = function(options) {
        return new Overlay.init(options);
    };

    var objConfig = {
        overlayId: 'basicOverlay',
        overlayOv: '.ov-overlay',
        overlayContent: '.ov-content',
        overlayColor: '#000000',
        overlayOpacity: 0.5,
        closable: true,
        isOpen: false,
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
            this.removeModal();
        },
        removeModal: function(id) {
            $('#'+this.options.overlayId).remove();
            $(this.options.overlayOv).remove();
            $(this.options.overlayContent).remove();
            this.unbindEvents();
        },
        loadInPage: function() {

        },
        loadRemotePage: function() {

        },
        events: function() {
            $(this.options.overlayOv).click(this.close.bind(this));
        },
        unbindEvents: function() {
            console.log("unbind eventssss"); 
            $(this.options.overlayOv).off('click');
        }


    };


    Overlay.init = function(options) {

        //this.isOpen = true;

        this.options =  $.extend({}, objConfig, options) || objConfig;
        

            var bodyHeight = $('body').outerHeight(),
            viewportHeight = $(window).height();

            //Modal inizialization
            $("body").append('<div id="'+ this.options.overlayId +'"><div class="ov-overlay"><div class="ov-content">Contenuto</div></div></div>');
            $("#"+this.options.overlayId).find('.ov-overlay').css({
                'z-index' : '9998',
                'position' : 'fixed',
                'backgroundColor' : this.options.overlayColor,
                'opacity' : this.options.overlayOpacity,
                'width' : '100%',
                'height': '100%',
                'top' : '0',
                'left' : '0'
            });
            $("#"+this.options.overlayId).find('.ov-content').css({
                'z-index' : '9999',
                'position' : 'fixed',
                'width': '500px',
                'top' : '0',
                'left': '0',
                'rigth': '0',
                'backgroundColor' : '#fff',
                'opacity': 1
            });

     
        

        this.events();

     
    }; 

    //Like jquery plugin
    $.fn.overLay = function (settings) {

        settings = settings || {};

        return this.each(function() {

            $(this).on('click', function() {
    
                O$(settings);
                return false;

            });

        });
    }
    
    
    Overlay.init.prototype = Overlay.proto;

    global.Overlay = global.O$ = Overlay;




})(window, jQuery);