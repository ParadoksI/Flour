$(document).ready(function () {
    $('.product__image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: false,
        dots: true,
        arrows: true,
        
    });

    $('.product__image__menu').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 50000,
        infinite: false,
        dots: false,
        arrows: true,
        
    });

    $('.toggleDisc').on('click', function() {
        $(this).closest('.product__disc').find('.product__disc__menu').toggleClass('active');
    });

    $('.closeProductMenu').on('click', function() {
        $(this).closest('.product__disc__menu').removeClass('active');
    });
});