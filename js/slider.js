$(document).ready(function(){
    
    var sliderImgArr = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
    var sliderVidArr = ['https://www.youtube.com/embed/ixzK0jqLO70'];
    
    for ( var i = 0; i < sliderImgArr.length; i++ ) {
        $(".sliderContent").append("<img src=" + "img/sliderImg/" + sliderImgArr[i] + ">");
        $(".sliderBull").append("<li>&bull;</li>");
        $(".slider img").css("display", "none");
        $(".slider img:nth-child(1)").css("display", "block");
    }
    
    var bulls = $(".sliderBull > *");
    var sliderContentImg = $(".sliderContent > *");
    
    for ( let i = 0; i < bulls.length; i++ ) {
        $(bulls[i]).click(function() {
            $(sliderContentImg).each(function() {
                $(this).css("display", "none");
            })
            $(sliderContentImg[i]).fadeIn().css("display", "block");
        })
    }
    
});