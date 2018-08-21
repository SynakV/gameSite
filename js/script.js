$(document).ready(function(){
    
    $(".headerMenuLinks").on("click","li", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top-60;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    
    $(!("input[type=checkbox]")).click(function() {
        $("input[type=checkbox]").prop("checked", false);
    });
    
    $(".headerMenuLinks li, .languageItems li, main").click(function() {
        $("input[type=checkbox]").prop("checked", false);
    });
    
    /*$(".headerMenuLinks li").click(function() {
        $(".headerMenuLinks li").css("background", "white");
        $(this).css("background", "green");
    });*/
    
    $(window).on("scroll touchmove", function() {
        
        /*var docScrolTop = $(document).scrollTop();
        var posTop = position().top-61;
        var bgLink = css('background', 'green');*/
        
        function whiteBg() {
            $('.headerMenuLinks li').css('background', 'white');
        }
        whiteBg();
        
        if ($(document).scrollTop() >= $("#aboutUs").position().top-61) {
            whiteBg();
            $('.headerMenuLinks li:nth-child(1)').css('background', 'green');
        };

        if ($(document).scrollTop() > $("#inDev").position().top-61) {
            whiteBg();
            $('.headerMenuLinks li:nth-child(2)').css('background', 'green');
        };

        if ($(document).scrollTop() > $("#ourGames").position().top-61) {
            whiteBg();
            $('.headerMenuLinks li:nth-child(3)').css('background', 'green');
        };
        
        if ($(document).scrollTop() > $("#feedback").position().top-61) {
            whiteBg();
            $('.headerMenuLinks li:nth-child(4)').css('background', 'green');
        };

    });
    
});