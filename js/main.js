jQuery(function($){
    $(document).ready(function(){

        /*Menu Scroll*/
        $(".about-menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 2000);
        });


    });
});










