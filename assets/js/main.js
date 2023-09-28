$(document).ready(function(){
    $('.products-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });

    $('.top-selling-item').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    // nouislider 
    var html5Slider = document.getElementById('html5');

    noUiSlider.create(html5Slider, {
        start: [200, 800],
        connect: true,
        range: {
            'min': 0,
            'max': 1000
        }
    });

    var inputNumber = document.getElementById('input-number');
    var inputNumber1 = document.getElementById('input-number-1');

    html5Slider.noUiSlider.on('update', function (values, handle) {

        var value = values[handle];

        if (handle) {
            inputNumber.value = value;
        } else {
            inputNumber1.value = Math.round(value);
        }
    });

    inputNumber1.addEventListener('change', function () {
        html5Slider.noUiSlider.set([null, this.value]);
    });

    inputNumber.addEventListener('change', function () {
        html5Slider.noUiSlider.set([null, this.value]);
    });

});