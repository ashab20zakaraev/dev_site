$(function(){

    var header = $("#header"),
        headerH = $("#header").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    /* Header Fixed */

    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {


        if( scrollOffset >= headerH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth Scroll */

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 800);
    });

    /* Menu-toggle */
    $("#nav-toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

});
