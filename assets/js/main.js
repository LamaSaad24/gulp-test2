$(document).ready(function(){$(".products-slider").slick({dots:!1,infinite:!1,speed:300,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".top-selling-item").slick({dots:!1,infinite:!1,speed:300,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3});var e=document.getElementById("html5"),n=(noUiSlider.create(e,{start:[200,800],connect:!0,range:{min:0,max:1e3}}),document.getElementById("input-number")),i=document.getElementById("input-number-1");e.noUiSlider.on("update",function(e,t){e=e[t];t?n.value=e:i.value=Math.round(e)}),i.addEventListener("change",function(){e.noUiSlider.set([null,this.value])}),n.addEventListener("change",function(){e.noUiSlider.set([null,this.value])})});