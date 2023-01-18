(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "991"
});
$('#mobile-menu-2').meanmenu({
	meanMenuContainer: '.mobile-menu-2',
	meanScreenWidth: "1199"
});

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 200) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

//mobile side menu
$('.side-toggle').on('click', function () {
	$('.side-info').addClass('info-open');
	$('.offcanvas-overlay').addClass('overlay-open');
})

$('.side-info-close,.offcanvas-overlay').on('click', function () {
	$('.side-info').removeClass('info-open');
	$('.offcanvas-overlay').removeClass('overlay-open');
})

// --------- ---------- home page  3 ---------------------



// mobile-menu-active

$('.menu_toggle_active').on('click', function() {
	$('.bg-overlay, .mobile_menu_active').addClass('active');
});

$('.bg-overlay, .mobile_menu_close').on('click', function() {
	$('.mobile_menu_active').removeClass('active');
	$('.bg-overlay').removeClass('active');
})

// artza meanmenu
$('.surgeon_menu').meanmenu({
	meanMenuContainer: '.mobile_menu',
	meanScreenWidth: "19920"
});
$('.surgeon_menu_2').meanmenu({
	meanMenuContainer: '.mobile_menu',
	meanScreenWidth: "19920"
});


// hero-slide-active

function sliderActive_hero3() {
	/*------------------------------------
	Slider
	--------------------------------------*/
	if (jQuery(".hero_slide_active").length > 0) {
		let sliderActive1 = '.hero_slide_active';
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			pagination: true,
			autoplay: {
				delay: 7000,
			},
			// If we need pagination
	        pagination: {
				el: ".slider-swiper-pagination",
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: '.hero-slide-next-btn',
				prevEl: '.hero-slide-prev-btn',
			},

			a11y: false
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + ' [data-animation]').each(function () {
					let anim = $(this).data('animation');
					let delay = $(this).data('delay');
					let duration = $(this).data('duration');

					$(this).removeClass('anim' + anim)
						.addClass(anim + ' animated')
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration
						})
						.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
							$(this).removeClass(anim + ' animated');
						});
				});
			};
			animated();
			// Make animated when slide change
			init.on('slideChange', function () {
				$(sliderActive1 + ' [data-animation]').removeClass('animated');
			});
			init.on('slideChange', animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}}

	sliderActive_hero3();


//gallery-3 Sortable Masonary with Filters

function enableMasonry1() {

	if($('.gallery_3_masonry_active').length){

		var winDow = $(window);

		// Needed variables

		var $container=$('.gallery_3_masonry_active .items_container');

		var $filter=$('.gallery_3_filter_btns');

		$container.isotope({

			filter:'*',

			 masonry: {

				columnWidth : 1,
				// columnWidth : '.masonry-item.md-column',
				// columnWidth : '.masonry-item.sm-column',
				// columnWidth : '.masonry-item.xs-column'

			 },

			animationOptions:{

				duration:500,

				easing:'linear'

			}

		});


		// Isotope Filter 

		$filter.find('li').on('click', function(){

			var selector = $(this).attr('data-filter');

			try {

				$container.isotope({ 

					filter	: selector,

					animationOptions: {

						duration: 500,

						easing	: 'linear',

						queue	: false

					}

				});

			} catch(err) {



			}

			return false;

		});


		winDow.on('resize', function(){

			var selector = $filter.find('li.active').attr('data-filter');

			$container.isotope({ 

				filter	: selector,

				animationOptions: {

					duration: 500,

					easing	: 'linear',

					queue	: false

				}

			});

		});


		var filterItemA	= $('.gallery_3_filter_btns li');

		filterItemA.on('click', function(){

			var $this = $(this);

			if ( !$this.hasClass('active')) {

				filterItemA.removeClass('active');

				$this.addClass('active');

			}

		});

	}

}

enableMasonry1();
	

// testimonial-3
var swiper = new Swiper(".testimonial_3_active", {
	// navigation: {
	//   nextEl: ".testimonial_3_slide_next",
	//   prevEl: ".testimonial_3_slide_prev",
	// },
	pagination: {
	  el: ".testimonial_3_progation",
	  clickable: true,
	},
  });


// sg-brand-2-slider

if (jQuery(".brand_3_slide_active").length > 0) {
	let acooterbrand = new Swiper('.brand_3_slide_active', {
		slidesPerView: 5,
		loop: true,
		rtl: false,
		infinite: true,
		autoplay: {
		delay: 4000,
			},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			480: {
			slidesPerView: 2,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 5,
			},
		}

});}


// ------------------------ home page 3 end --------------------------

function sliderActive() {
	/*------------------------------------
	Slider
	--------------------------------------*/
	if (jQuery(".slider-active").length > 0) {
		let sliderActive1 = '.slider-active';
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			rtl: false,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,

			autoplay: {
				delay: 5000,
			},

			// If we need pagination
	        pagination: {
				el: ".cinkes-swiper-pagination",
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

			a11y: false
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + ' [data-animation]').each(function () {
					let anim = $(this).data('animation');
					let delay = $(this).data('delay');
					let duration = $(this).data('duration');

					$(this).removeClass('anim' + anim)
						.addClass(anim + ' animated')
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration
						})
						.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
							$(this).removeClass(anim + ' animated');
						});
				});
			};
			animated();
			// Make animated when slide change
			init.on('slideChange', function () {
				$(sliderActive1 + ' [data-animation]').removeClass('animated');
			});
			init.on('slideChange', animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}}



	// portfolio active 1 
	const sgPortfolioActive = new Swiper(".sg-portfolio-active", {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: ".sg-portfolio-prev",
			prevEl: ".sg-portfolio-next",
			},
			breakpoints: {
			0: {
				slidesPerView: 1,
				},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1199: {
				slidesPerView: 4
			}
		}
	});
	
	// portfolio active 2 
	const sgPortfolioActiveTwo = new Swiper(".sg-portfolio-carousel-active", {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		grabCursor: true,
		observer: true,
		observeParents: true,
		centeredSlides: true,
		navigation: {
			nextEl: ".sg-portfolio-prev-2",
			prevEl: ".sg-portfolio-next-2",
			},
			breakpoints: {
			0: {
				slidesPerView: 1,
				},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1199: {
				slidesPerView: 3
			}
		}
	});
	// team active 1 
	const sgTeamActive = new Swiper(".sg-team-active", {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: ".sg-team-prev",
			prevEl: ".sg-team-next",
			},
			breakpoints: {
			0: {
				slidesPerView: 1,
				},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1199: {
				slidesPerView: 4
			}
		}
	});
	// brand active 1 
	const sgBrandActive = new Swiper(".sg-brand-active", {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: ".sg-portfolio-prev",
			prevEl: ".sg-portfolio-next",
			},
			breakpoints: {
			0: {
				slidesPerView: 2,
				},
			576: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 2,
			},
			1199: {
				slidesPerView: 3
			}
		}
	});
/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});
/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});
$('.has-nice-select, .contact-form select').niceSelect();
// data background
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})
// data width
$("[data-width]").each(function(){
	$(this).css("width",$(this).attr("data-width"))
})
// data background color
$("[data-bg-color]").each(function(){
	$(this).css("background-color",$(this).attr("data-bg-color"))
})
//for menu active class
$('.portfolio_nav button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});
// testimonial acitve 1
var testimonialControl = new Swiper(".sg-testimonial-active-control", {
	loop: true,
	spaceBetween: 0,
	slidesPerView: 1,
	freeMode: true,
	autoplay: true,
	watchSlidesProgress: true,
});

var testimonialControlMain = new Swiper(".sg-testimonial-active-main", {
	loop: true,
	spaceBetween: 0,
	navigation: {
		nextEl: ".sg-testimonial-next",
		prevEl: ".sg-testimonial-prev",
	},
	thumbs: {
		swiper: testimonialControl,
	},
});
// testimonial active 2 
const testimonialActiveTwo = new Swiper(".sg-testimonial-active-2", {
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
	centeredSlides: true,
	navigation: {
		nextEl: ".sg-portfolio-prev-2",
		prevEl: ".sg-portfolio-next-2",
		},
		breakpoints: {
		0: {
			slidesPerView: 1,
			centeredSlides: false,
		},
		576: {
			slidesPerView: 1,
			centeredSlides: false,
		},
		768: {
			slidesPerView: 2,
			centeredSlides: false,
		},
		992: {
			slidesPerView: 2,
		},
		1199: {
			slidesPerView: 3
		}
	}
});
// product active 2 
var singleProductPopupImg = new Swiper(".sg-single-product-popup-active", {
	loop: true,
	spaceBetween: 0,
	slidesPerView: 1,
	freeMode: true,
	autoplay: true,
	watchSlidesProgress: true,
});
var singleProductPopupControl = new Swiper(".sg-single-product-popup-control-active", {
	loop: true,
	spaceBetween: 20,
	slidesPerView: 3,
	freeMode: true,
	autoplay: true,
	watchSlidesProgress: true,
	thumbs: {
		swiper: singleProductPopupImg,
	}
});

// product active 3
var singleProductPopupImgThree = new Swiper(".sg-single-product-popup-active-2", {
	loop: true,
	spaceBetween: 0,
	slidesPerView: 1,
	freeMode: true,
	autoplay: true,
	watchSlidesProgress: true,
});
var singleProductPopupControlThree = new Swiper(".sg-single-product-popup-control-active-2", {
	loop: true,
	spaceBetween: 20,
	slidesPerView: 3,
	freeMode: true,
	autoplay: true,
	watchSlidesProgress: true,
	slideToClickedSlide: true,
	thumbs: {
		swiper: singleProductPopupImgThree,
	},
	breakpoints: {
		0: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
		576: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
		},
		1199: {
			slidesPerView: 3
		}
	}
});
const productActiveTwo = new Swiper(".sg-product-active-2", {
	slidesPerView: 4,
	spaceBetween: 30,
	loop: true,
	centeredSlides: false,
	navigation: {
		nextEl: ".sg-product-prev-2",
		prevEl: ".sg-product-next-2",
		},
		breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1199: {
			slidesPerView: 4
		}
	}
});
// instagram active 2 
const instagramActiveTwo = new Swiper(".instagram-active-2", {
	slidesPerView: 5,
	spaceBetween: 0,
	loop: true,
	centeredSlides: false,
	navigation: {
		nextEl: ".sg-insta-prev-2",
		prevEl: ".sg-insta-next-2",
		},
		breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1199: {
			slidesPerView: 4
		}
	}
});
// related product 
const relatedProduct = new Swiper(".sg-shop-details-related-product-active", {
	slidesPerView: 4,
	spaceBetween: 30,
	loop: true,
	centeredSlides: false,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1199: {
			slidesPerView: 4
		}
	}
});
// recent product 
const recentProduct = new Swiper(".sg-shop-details-recent-product-active", {
	slidesPerView: 4,
	spaceBetween: 30,
	loop: true,
	centeredSlides: false,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1199: {
			slidesPerView: 4
		}
	}
});

// search popup
const searchPopup = new Swiper(".sg-popup-search-result-product-active", {
	slidesPerView: 6,
	spaceBetween: 30,
	loop: true,
	centeredSlides: false,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 4,
		},
		1199: {
			slidesPerView: 6
		}
	}
});
// cross 2
$('.cross2').cross2({
	titlesEnabled: false,
	mousemoveEnabled: true,
	easing: 'easeInOutBack',
	animationDuration: 1200,
});
//   odometer
$('.odometer').appear(function (e) {
	var odo = $(".odometer");
	odo.each(function () {
		var countNumber = $(this).attr("data-count");
		$(this).html(countNumber);
	});
});
// WOW active
new WOW().init();

sliderActive();
// datepicker
$('[data-toggle="datepicker"]').datepicker();
// select2
$('#select-doctor, .sg-has-select-2').select2();
// popup
$('.video-call-btn, .sg-header-sidebar-action-btn').on('click', function() {
	$('.sg-video-call-popup, .bg-overlay').addClass('visible');
});
$('.cross-btn button, .bg-overlay').on('click', function() {
	$('.sg-video-call-popup, .bg-overlay').removeClass('visible');
});
$('.sg-header-sidebar-action-btn-bar').on('click', function() {
	$('.sg-sidebar-menu-popup-1, .bg-overlay').addClass('visible');
})
$('.bg-overlay, .sg-sidebar-menu-cross button').on('click', function() {
	$('.sg-sidebar-menu-popup-1, .bg-overlay').removeClass('visible');
})
$('.header-search-toogle-btn').on('click', function() {
	$('.bg-overlay, .sg-popup-search-box').addClass('visible');
});
$('.bg-overlay, .sg-popup-search-box-close-action-btn').on('click', function() {
	$('.sg-popup-search-box').removeClass('visible');
	$('.bg-overlay').removeClass('visible');
})
$('.has-cursor').on('click',function() {
	$(this).closest('.sg-widget-shop-1').find('.sg-shop-widget-toogle').slideToggle(500);
})
// range slider activation
$(".slider-range-bar").slider({
	range: true,
	min: 0,
	max: 500,
	values: [75, 300],
	slide: function (event, ui) {
		$(".amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
	},
});
// product quantity
var productQuantity = 1;
// quantity form 1
$('.sg-single-product-popup-quantity-box .plus').on('click', function () {
	var selectedInput = $(this).closest('.sg-single-product-popup-quantity-box').find('input');
	productQuantity += 1;
	selectedInput.attr('value', productQuantity);
});
$('.sg-single-product-popup-quantity-box .minus').on('click', function () {
	var selectedInput = $(this).closest('.sg-single-product-popup-quantity-box').find('input');
	productQuantity-=1;
	if(productQuantity < 1) {
		productQuantity = 1;
	}
	selectedInput.attr('value', productQuantity);
});
// quantity form 2
$('.sg-shopping-cart-popup-quantity-form .plus-btn').on('click', function () {
	var selectedInput = $(this).closest('.sg-shopping-cart-popup-quantity-form').find('input');
	productQuantity += 1;
	selectedInput.attr('value', productQuantity);
});
$('.sg-shopping-cart-popup-quantity-form .minus-btn').on('click', function () {
	var selectedInput = $(this).closest('.sg-shopping-cart-popup-quantity-form').find('input');
	productQuantity-=1;
	if(productQuantity < 1) {
		productQuantity = 1;
	}
	selectedInput.attr('value', productQuantity);
});



// product view popup
$('.eye-popup-product, .bg-overlay').on('click', function() {
	$('.sg-single-product-popup').addClass('visible');
	$('.bg-overlay').addClass('visible');
});
$('.sg-single-product-popup-close-action, .bg-overlay').on('click', function() {
	$('.sg-single-product-popup').removeClass('visible');
	$('.bg-overlay').removeClass('visible');
});
// star rating
$(".sg-star-rating").starRating({
	initialRating: 4,
	strokeColor: '#FFCD00',
	strokeWidth: 10,
	starSize: 16.46
  });
  $('.has-cart-popup').on('click', function() {
	  $('.sg-shopping-cart-popup').addClass('visible');
	  $('.bg-overlay').addClass('visible');
  })
  $('.sg-shopping-cart-popup-close-btn, .bg-overlay, .shopping-cart-sidebar-popup-close').on('click', function() {
	$('.sg-shopping-cart-popup').removeClass('visible');
	$('.bg-overlay').removeClass('visible');
})
// admin panel
$('.side-admin-settings').on('click', function() {
	$('.side-admin-panel-right').addClass('side-admin-panel-visible');
	$('.overlay').addClass('overlay-visible');
})
$('.cinkes-side-admin-panel-close-btn, .overlay').on('click', function() {
	$('.side-admin-panel-right').removeClass('side-admin-panel-visible');
	$('.overlay').removeClass('overlay-visible');
})

/*------------------------------------
Magic Curson
--------------------------------------*/

$('.admin-cursor-magic').on('click', function() {
	$('.mouse-cursor-invisible').addClass('visible');
	console.log('magic cursor clicked');
});
$('.admin-cursor-default').on('click', function() {
	$('.mouse-cursor-invisible').removeClass('visible');
	console.log('default cursor clicked');
});

})(jQuery);

// Mouse Custom Cursor
function itCursor() {
    var myCursor = jQuery(".mouseCursor");
    if (myCursor.length) {
        if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
                t = document.querySelector(".cursor-outer");
            let n,
                i = 0,
                o = !1;
            (window.onmousemove = function(s) {
                o ||
                    (t.style.transform =
                        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                    (e.style.transform =
                        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                    (n = s.clientY),
                    (i = s.clientX);
            }),
            $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
                    e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                }),
                $("body").on("mouseleave", "button, a, .cursor-pointer", function() {
                    ($(this).is("a", "button") &&
                        $(this).closest(".cursor-pointer").length) ||
                    (e.classList.remove("cursor-hover"),
                        t.classList.remove("cursor-hover"));
                }),
                (e.style.visibility = "visible"),
                (t.style.visibility = "visible");
        }
    }
}
itCursor();