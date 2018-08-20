$(document).ready(function(){
    
    var sliderImgArr = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
    var sliderVidArr = ['https://www.youtube.com/embed/ixzK0jqLO70', 'https://www.youtube.com/embed/oxoFVqetl1E', 'https://www.youtube.com/embed/l0QGLMwR-lY'];
    
    for ( var i = 0; i < sliderVidArr.length; i++ ) {
        $(".sliderContent").append("<iframe src=" + sliderVidArr[i] + " frameborder=0 allowfullscreen" + "></iframe>");
    }
    
    for ( var i = 0; i < sliderImgArr.length; i++ ) {
        $(".sliderContent").append("<img src=" + "img/sliderImg/" + sliderImgArr[i] + ">");
        $(".sliderContent > *").css("display", "none");
        $(".sliderContent > *:nth-child(1)").css("display", "block");
    }
    
    var sliderContentLength = $(".sliderContent > *");
    
    for ( var i = 0; i < sliderContentLength.length; i++ ) {
        $(".sliderBull").append("<li>&bull;</li>");
    }
    
    var bulls = $(".sliderBull > *");
    
    for ( let i = 0; i < bulls.length; i++ ) {
        $(bulls[i]).click(function() {
            $(sliderContentLength).each(function() {
                $(this).css("display", "none");
            })
            $(sliderContentLength[i]).fadeIn().css("display", "block");
        })
    }
    
});