$(document).ready(function(){
    
    var sliderImgArr = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
    var sliderVidArr = ['https://www.youtube.com/embed/ixzK0jqLO70', 'https://www.youtube.com/embed/oxoFVqetl1E', 'https://www.youtube.com/embed/l0QGLMwR-lY'];
    
    for ( var i = 0; i < sliderVidArr.length; i++ ) {
        $(".sliderContent").append("<iframe src=" + sliderVidArr[i] + " frameborder=0 allowfullscreen" + "></iframe>");
    }
    
    for ( var i = 0; i < sliderImgArr.length; i++ ) {
        $(".sliderContent").append("<img src=" + "img/sliderImg/" + sliderImgArr[i] + ">");
    }
    
    var sliderContentLength = $(".sliderContent > *");
    
    for ( var i = 0; i < sliderContentLength.length; i++ ) {
        $(".sliderBull").append("<li>&bull;</li>");
        $(".sliderContent > *").css("display", "none");
        $(".sliderContent > *:nth-child(1)").css("display", "block");
    }
    
    var bulls = $(".sliderBull > *");
    
    var sliderIndex = 0;
    
    let sliderDelay = 3000;
    
    for ( let i = 0; i < bulls.length; i++ ) {
        $(bulls[0]).css("color", "#00ff00");
        $(bulls[i]).click(function() {
            sliderDelay = 5000;
            $(sliderContentLength).each(function() {
                $(bulls).css("color" , "green");
                $(this).css("display" , "none");
            });
            $(this).css("color" , "#00ff00");
            $(sliderContentLength[i]).fadeIn().css("display" , "block");
            sliderIndex = i;
        })
    }
    
    setInterval(function(){
        sliderIndex++;
        $(sliderContentLength).each(function() {
            $(this).css("display" , "none");
            $(bulls).css("color", "green");
        });
        $(sliderContentLength[sliderIndex]).fadeIn().css("display" , "block");
        $(bulls[sliderIndex]).css("color", "#00ff00");
        
        if (sliderIndex == sliderContentLength.length-1) {
            sliderIndex = -1;
        }
        
//        if (sliderDelay == 5000) {
//            sliderDelay = 3000;
//        }
        
    }, sliderDelay);
    
});