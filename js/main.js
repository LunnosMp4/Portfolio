;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};
	

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};


	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var sliderMain = function() {
		
	  	$('#fh5co-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	};

	// Magnetic Hover Effet
	const $$ = (s, o = document) => o.querySelectorAll(s);

	$$('.btn, .icon, .js-gotop').forEach(el => el.addEventListener('mousemove', function(e) {
	const pos = this.getBoundingClientRect();
	const mx = e.clientX - pos.left - pos.width/2; 
	const my = e.clientY - pos.top - pos.height/2;
	
	this.style.transform = 'translate('+ mx * 0.15 +'px, '+ my * 0.3 +'px)';
	this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
	this.children[0].style.transform = 'translate('+ mx * 0.025 +'px, '+ my * 0.075 +'px)';
	}));

	$$('.btn, .icon, .js-gotop').forEach(el => el.addEventListener('mouseleave', function() {
	this.style.transform = 'translate3d(0px, 0px, 0px)';
	this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
	this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
	}));

	// Cursor circle effect
	$(document).on('mousemove', function(e) {
		TweenLite.to($('.cursor'), 0.4, {
		  css: {
			left: e.pageX,
			top: e.pageY
		  }
		});
	});

	// Change cursor when mouse hover an activator
	var cursorActive = function(activator) {
		$(activator).hover(function() {
			$('.cursor').css('mix-blend-mode', 'soft-light');
			$('.cursor').css('background', '#fff');
			$('.cursor').css('border-color', '#fff');
			$('.cursor').css('transform', 'scale(1.5)');
		}, function() {
			$('.cursor').css('mix-blend-mode', '');
			$('.cursor').css('background', 'transparent');
			$('.cursor').css('border-color', '#a19aed4a');
			$('.cursor').css('transform', 'scale(1)');
		});
	}
  
	// On click grow circle
	$(function() {
		$(document).mousedown(function(e) {
			if (e.which == 1) {
				$('.cursor').css('transform', 'scale(1.6)');
				$('.cursor').css('border', '1px solid #c3c8de');
			}
		}).mouseup(function(e) {
			if (e.which == 1) {
				$('.cursor').css('transform', 'scale(1)');
				$('.cursor').css('border', '1px solid #c3c8de');
			}
		});
	});
  
  	// When shift key is pressed show mouse
		$(document).keydown(function(e) {
		  if (e.keyCode == 16) {
		$('.cursor').css('mix-blend-mode', 'difference');
			  $('.cursor').css('background', '#fff');
			  $('.cursor').css('border-color', '#fff');
			  $('.cursor').css('transform', 'scale(4)');
		$('#overlay').fadeIn();
		  }
		}).keyup(function(e) {
		  if (e.keyCode == 16) {
		$('.cursor').css('mix-blend-mode', '');
			  $('.cursor').css('background', 'transparent');
			  $('.cursor').css('border-color', '#a19aed4a');
			  $('.cursor').css('transform', 'scale(1)');
		$('#overlay').fadeOut();
	  }
	});

	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		sliderMain();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
		cursorActive('.cursor-active');
		cursorActive('button');
		cursorActive('a');
	});


}());

