$(document).ready(function(){
    
    $(".headerMenuLinks").on("click","li", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top-60;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    
    $(!("input[type=checkbox]")).click(function() {
        $("input[type=checkbox]").prop("checked", false);
    })

});