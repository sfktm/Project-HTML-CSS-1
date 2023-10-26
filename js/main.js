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
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    draggable: true,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    draggable: true,
                    slidesToShow: 1,
                },
            },
        ]
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
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    draggable: true,
                },
            },
        ]
    })

    $('.test__arrow-prev').on('click', function() {
        $('.test__slider').slick('slickPrev')
    })

    $('.test__arrow-next').on('click', function() {
        $('.test__slider').slick('slickNext')
    })





    /*$('.program__accordeon-btn').on('click', function (e) {
        $(this).toggleClass('program__accordeon-btn_active')
        $(this).children('.program__accordeon-text').slideToggle()
    })*/

    $('.program__accordeon-btn').on('click', function (e) {

        if ($(this).hasClass('program__accordeon-btn_active')) {
            $(this).removeClass('program__accordeon-btn_active')
            $(this).children('.program__accordeon-text').slideUp()
        } else {
            $('.program__accordeon-btn').removeClass('program__accordeon-btn_active')
            $('.program__accordeon-text').slideUp()
            $(this).addClass('program__accordeon-btn_active')
            $(this).children('.program__accordeon-text').slideDown()
        }

    })


    /* ========================  MEDIA  ======================== */
    /* ========================  MEDIA  ======================== */

    $('.burger, .overlay').on('click', function() {
        $('.header__top').toggleClass('header__top_open')
        $('.overlay').toggleClass('overlay_show')
        $('.burger').toggleClass('burger-menu')
        $('.burger').toggleClass('burger-shut')
    })

    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top_open') === false) {
            $('.burger').addClass('burger_scroll')
        } else {
            $('.burger').removeClass('burger_scroll')
        }
    }, 0)


    $('.footer__head_slide').on('click', function () {   
        $(this).next().slideToggle()
    })

})