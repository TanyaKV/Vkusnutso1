$(function () {
    // кнопка-форма добавления нового рецепта
    $('.header__button').on('click', function () {
        $('.form-cart').removeClass('form-cart--close');
    });
    $('.form-cart__close').on('click', function () {
        $('.form-cart').addClass('form-cart--close');
    });
    // меню слайдер
     $('.navigation__items').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="img/arrow-left.svg" alt="arrow left"></button>',
         nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="img/arrow-right.svg" alt="arrow right"></button>',
         responsive: [
             {
                 breakpoint: 1200,
                 settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                 }
             },
             {
                 breakpoint: 891,
                 settings: {
                     slidesToShow: 4,
                     slidesToScroll: 2,
                 }
             },
             {
                 breakpoint: 750,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 1,
                 }
             },
             {
                 breakpoint: 661,
                 settings: {
                     slidesToShow: 5,
                     slidesToScroll: 3,
                 }
             },
             {
                 breakpoint: 630,
                 settings: {
                     slidesToShow: 4,
                     slidesToScroll: 2,
                 }
             },
             {
                 breakpoint: 530,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 1,
                 }
             },
             {
                 breakpoint: 430,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1,
                 }
             }
        ]
    });

    $('.recipe__video-link').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
    });


    $('.recipe__photo').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });

})
