$(function  () {
    var navbarHeight = $('.nav').outerHeight();   
    $('.scroll-id').click(function (event) {
        // var navbarHeight = $('.list').outerHeight();  
        event.preventDefault();
        var id = $(this).attr('href');
        var offset = $(id).offset().top;
        offset -= navbarHeight;
        $('html').animate({ scrollTop: offset }, 700);
   })
})