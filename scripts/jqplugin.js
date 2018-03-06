(function($) {
    
    $.fn.helloWorld = function(options) {

        // Establish our default settings
        var settings = $.extend({
            text         : 'Hello, World!',
            color        : null,
            fontStyle    : null
        }, options);


        this.each(function() {
            
            $(this).text(settings.text);
        });

    }
    
}(jQuery));