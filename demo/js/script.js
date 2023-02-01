$(function ($) {
    "use strict";
	
    //scrollspy menu
	
    $('body').scrollspy({
        target: '.navbar',
        offset: 81
    });

    var htmlBody = $('html, body');
    
    //nave top js
	var nav_navbar = $('nav.navbar'),
        $window = $(window),
        navOffset = nav_navbar.offset().top;

    $('.nav-wrapper').height(nav_navbar.outerHeight());
    
    $('ul.navbar-nav > li > a').on('click', function(){
        $('.navbar-collapse').removeClass('in');
        console.log('test');
    });
	
    //animation scroll js

    $('a[href*="#"]:not([href="#').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                htmlBody.animate({
                    scrollTop: target.offset().top - 75
                }, 1000);
                return false;
            }
        }
    });
    var windo = $(window);
	
    // this is for back to top
	
    var bc2top = $('.back-top-btn');
    bc2top.on('click', function () {
        htmlBody.animate({
            scrollTop: 0
        }, 1000);
    });
    windo.on('scroll', function () {

        var scrollPos = windo.scrollTop();
		
        // back to top button js
		
        if (scrollPos > 150) {
            bc2top.fadeIn(1000);
        } else {
            bc2top.fadeOut(1000);
        }
    });
    var myNavBar = {
        flagAdd: true,
        elements: [],
        init: function (elements) {
            this.elements = elements;
        },
        add: function () {
            if (this.flagAdd) {
                for (var i = 0; i < this.elements.length; i++) {
                    document.getElementById(this.elements[i]).className += " fixed-theme";
                }
                this.flagAdd = false;
            }
        },
        remove: function () {
            for (var i = 0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className =
                    document.getElementById(this.elements[i]).className.replace(/(?:^|\s)fixed-theme(?!\S)/g, '');
            }
            this.flagAdd = true;
        }
    };

    myNavBar.init([
		"header",
		"header-container",
		"brand"
	]);

    function offSetManager() {
        var yOffset = 0;
        var currYOffSet = window.pageYOffset;
        if (yOffset < currYOffSet) {
            myNavBar.add();
        } else if (currYOffSet == yOffset) {
            myNavBar.remove();
        }
    }
    window.onscroll = function (e) {
        offSetManager();
    };

    offSetManager();

    // header slider js

    $('.slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        prevArrow: '.slidPrv',
        nextArrow: '.slidNext',
        arrows: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
    });


    // portfolio slick

    $('.portfolio-imag').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 2000,
        prevArrow: '.slidPrv2',
        nextArrow: '.slidNext2',

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
	},
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
	},
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
	}
  ]
    });

    //portfolio lightbox

    $('.venobox').venobox({
        border: '5px',
    });

    // service slick part 

    $('.service-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<i class="fa fa fa-chevron-up slidPrv3"></i>',
        nextArrow: '<i class="fa fa-chevron-down slidNext3"></i>',
        vertical: true,
        verticalSwiping: true,
        autoplay: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        speed: 1000,

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
		},
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
		}
	  ]
    });

    // testimonial slick part //

    $('.testimonial-details').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial-slider-img',

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
			},
            {
                breakpoint: 767,
                settings: {
                    vertical: false,
                    horizontal: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
			}
		  ]
    });

    $('.testimonial-slider-img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                    slidesToShow: 3
                }
		}
	],
        asNavFor: '.testimonial-details',
        dots: false,
        arrows: true,
        prevArrow: '<i class="fa fa fa-chevron-up slidPrv4"></i>',
        nextArrow: '<i class="fa fa-chevron-down slidNext4"></i>',
        vertical: true,
        verticalSwiping: true,
        centerPadding: '0px',
        centerMode: true,
        focusOnSelect: true,
    });

    // team slick //

    $('.team-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
		},
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
		},
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
		}
	  ]
    });


    // counter js

    $('.statistic-counter_two, .statistic-counter, .count-number').counterUp({
        delay: 10,
        time: 2000
    });

    // market slick
	
    $('.market-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
		},
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
		},
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    slidesToScroll: 1
                }
        },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
		}
	  ]
    });

});