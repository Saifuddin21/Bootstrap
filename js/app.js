$(function() {
    $(window).on('load', function() {
        $("#preloader").fadeOut(500)
    })
    $('.slider').slick({
        prevArrow: "<i class=' icon fa-2xl fas fa-chevron-left'></i>",
        nextArrow: '<i class=" icon fa-2xl fas fa-chevron-right"></i>',
        autoplay: true,
        speed: 700,
        fade: true,
        cssEase: 'linear'
    });
})