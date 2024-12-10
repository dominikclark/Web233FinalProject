"use strict"

// https://www.bxslider.com 

$(document).ready( () => {
    $(".slider").bxSlider({
        slideWidth: 500,
        maxSlides: 1,
        auto: true,
        pager: false,
        captions: true,
    });
});