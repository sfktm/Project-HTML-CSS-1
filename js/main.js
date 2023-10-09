$(function () {

    var mixer = mixitup('.directions__content-box');

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn_active')
        $(this).addClass('directions__filter-btn_active')        
    })

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        infinite: true,
        draggable: false,
        waitForAnimate: false,
    })

    $('.team__arrow-prev').on('click', function() {
        $('.team__slider').slick('slickPrev')
    })

    $('.team__arrow-next').on('click', function() {
        $('.team__slider').slick('slickNext')
    })
    
    $('.test__slider').slick({
        arrows: false,
        infinite: true,
        draggable: false,
        waitForAnimate: false,
        dots: true,
        appendDots: $('.test__dots'),
    })

    $('.test__arrow-prev').on('click', function() {
        $('.test__slider').slick('slickPrev')
    })

    $('.test__arrow-next').on('click', function() {
        $('.test__slider').slick('slickNext')
    })

})