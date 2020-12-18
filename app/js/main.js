$(function() {
    $(".rate-yo").rateYo({ starWidth: "24px", ratedFill: "#F3CE0D", spacing: "5px", normalFill: "#c4c4c4", readOnly: !0 }),
        $(".reviews-slider__inner").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            prevArrow: '<button class="reviews-slider__btn reviews-slider__btnprev"><img src="images/arrow-left.svg" alt=""></button>',
            nextArrow: '<button class="reviews-slider__btn reviews-slider__btnnext"><img src="images/arrow-right.svg" alt=""></button>',
            responsive: [
                { breakpoint: 1023, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ],
        }),
        $(".mfp-gallery__item").magnificPopup({ type: "image", closeOnContentClick: !0, mainClass: "mfp-img-mobile", image: { verticalFit: !0, gallery: !0 }, gallery: { enabled: !0 }, zoom: { enabled: !0, duration: 300 } }),
        $(".menu-btn__inner").on("click", function() {
            $(".header-menu").slideToggle(), $(".header__btn").toggle(), $("a").removeClass("animate__animated");
        });
});