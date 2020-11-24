$(function() {

    $(".rate-yo").rateYo({
        starWidth: "24px",
        ratedFill: "#F3CE0D",
        spacing: "5px",
        normalFill: "#c4c4c4",
        readOnly: true
    });

    $('.reviews-slider__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="reviews-slider__btn reviews-slider__btnprev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="reviews-slider__btn reviews-slider__btnnext"><img src="images/arrow-right.svg" alt=""></button>',
    });

    $('.mfp-gallery__item').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true,
            gallery: true
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }

    });


});