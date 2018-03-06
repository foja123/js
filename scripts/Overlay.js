(function(global, $) {


    var Overlay = function(options, isjq) {
        return new Overlay.init(options, isjq);
    };

    var objConfig = {
        overlayId: 'basicOverlay',
        overlayOv: '.ov-overlay',
        overlayContent: '.ov-content',
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

            
            return this;
        },
        close: function(id) {

            
            this.removeModal();
        },
        removeModal: function(id) {
            $('#'+this.options.overlayId).remove();
            $(this.options.overlayOv).remove();
            $(this.options.overlayContent).remove();
            this.unbindEvents();
        },
        loadInPage: function() {
            //controllo se il content esiste e chiamo il metodo show
        },
        loadRemotePage: function() {

        },
        show: function() {
            //Se esiste before() eseguo before e poi faccio l'animate dell'opacity al content
            if(this.options.before) {
                if(typeof this.options.before === "function") {
                    // throw "Parametro non è una funzione!";
                    // return false;
                    console.log('ovcontent: ' + this.options.overlayContent);
                    this.options.before(this.options.overlayContent);

                } else {
                    this.options.overlayOv.show();
                }
                
            } else {
    
            }
        },
        events: function() {
            $(this.options.overlayOv).click(this.close.bind(this));
        },
        unbindEvents: function() {

            $(this.options.overlayOv).off('click');
        }


    };


    Overlay.init = function(options, isjq) {



        this.options =  $.extend({}, objConfig, options) || objConfig;
        

        var bodyHeight = $('body').outerHeight(),
        viewportHeight = $(window).height();

        //Modal inizialization
        $("body").append('<div id="'+ this.options.overlayId +'"><div class="ov-overlay"><div class="ov-content"></div></div></div>');
        $("#"+this.options.overlayId).find('.ov-overlay').css({
            'z-index' : '9998',
            'position' : 'fixed',
            'backgroundColor' : this.options.overlayColor,
            'opacity' : this.options.overlayOpacity,
            'width' : '100%',
            'height': viewportHeight > bodyHeight ? viewportHeight : bodyHeight + 'px',
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
            'opacity': 0
        });


        if(isjq) {
            this.show();
        }
        
        

        this.events();

     
    }; 

    //Like jquery plugin
    $.fn.overLay = function (settings) {

        settings = settings || {};

        return this.each(function() {

            $(this).on('click', function() {
    
                O$(settings, true);
                return false;

            });

        });
    }
    
    
    Overlay.init.prototype = Overlay.proto;

    global.Overlay = global.O$ = Overlay;




})(window, jQuery);