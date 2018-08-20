$(document).ready(function() {
    
    if ($("body").attr("id") == "gothic3") {
        var gothic3Img = ['1.jpg', '2.jpg', '3.jpg'];
        var gothic3Vid = ['https://www.youtube.com/embed/ixzK0jqLO70', 'https://www.youtube.com/embed/oxoFVqetl1E', 'https://www.youtube.com/embed/l0QGLMwR-lY'];

        for ( var i = 0; i < gothic3Vid.length; i++ ) {
            $(".sliderContent").append("<iframe src=" + gothic3Vid[i] + " frameborder=0 allowfullscreen" + "></iframe>");
        }

        for ( var i = 0; i < gothic3Img.length; i++ ) {
            $(".sliderContent").append("<img src=" + "img/" + gothic3Img[i] + ">");
            $(".sliderContent > *").css("display", "none");
            $(".sliderContent > *:nth-child(1)").css("display", "block");
        }
    }
    
    if ($("body").attr("id") == "nfsmw") {
        var nfsmwImg = ['1.jpg', '2.jpg', '3.jpg'];
        var nfsmwVid = ['https://www.youtube.com/embed/ixzK0jqLO70', 'https://www.youtube.com/embed/oxoFVqetl1E', 'https://www.youtube.com/embed/l0QGLMwR-lY'];

        for ( var i = 0; i < nfsmwVid.length; i++ ) {
            $(".sliderContent").append("<iframe src=" + nfsmwVid[i] + " frameborder=0 allowfullscreen" + "></iframe>");
        }

        for ( var i = 0; i < nfsmwImg.length; i++ ) {
            $(".sliderContent").append("<img src=" + "img/" + nfsmwImg[i] + ">");
            $(".sliderContent > *").css("display", "none");
            $(".sliderContent > *:nth-child(1)").css("display", "block");
        }
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
    
    $(".backButton").click(function() {
        history.back(-1);
    })
    
})