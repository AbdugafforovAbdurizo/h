$(function  () {
    $('.burger').click(function (event) {
        $('.nav').toggleClass('active');
        $('body').toggleClass('lock');
        // $('.mobil').css({ 'background':'#f6f6f6fd'}) 
    })
})