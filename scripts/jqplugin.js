(function($) {
    
    $.fn.helloWorld = function(options) {

        // Establish our default settings
        var settings = $.extend({
            text         : 'Hello, World!',
            color        : null,
            fontStyle    : null
        }, options);


        console.log("hello: " + this);

        for(var prop in settings) {
            console.log("h: " + settings[prop])
        }
        
        this.each(function() {
            
            $(this).text(settings.text);
        });

    }
    
}(jQuery));