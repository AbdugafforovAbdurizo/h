$(function  () {
    var windowHeight = $(window).height();
   
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        
        if (scroll >= (windowHeight / windowHeight)) {
            $('.list').addClass('scrol')
        }
        else {
            $('.list').removeClass('scrol');
            
        }});
})