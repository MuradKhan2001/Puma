$('#first-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});


$('#second-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
});
