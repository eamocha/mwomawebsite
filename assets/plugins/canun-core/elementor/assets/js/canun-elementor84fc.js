/*
Template Name: Canun
Author: wpoceans
Version: 1.0
*/

(function($){
'use strict';

/*----- ELEMENTOR LOAD FUNTION CALL ---*/

$( window ).on( 'elementor/frontend/init', function() {

	var swiper_slide = function(){
	 
     // SLIDER
    var menu = [];
    jQuery('.swiper-slide').each(function (index) {
        menu.push(jQuery(this).find('.slide-inner').attr("data-text"));
    });
    var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },

        watchSlidesProgress: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        on: {
            progress: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-inner").style.transform =
                        "translate3d(" + innerTranslate + "px, 0, 0)";
                }
            },

            touchStart: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                }
            },

            setTransition: function (speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                        speed + "ms";
                }
            }
        }
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);

	}; // end



    // sliderBgSetting

    var sliderBgSetting = function(){
        // DATA BACKGROUND IMAGE
        var sliderBgSetting = $(".slide-bg-image");
        sliderBgSetting.each(function (indx) {
            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });

        

    }; // end



    var hero_client_slider = function(){

      /*------------------------------------------
        = Client SLIDER
      -------------------------------------------*/
      if ($(".wpo-happy-client-slide").length) {
          $(".wpo-happy-client-slide").owlCarousel({
              autoplay: true,
              smartSpeed: 300,
              margin: 0,
              loop:true,
              autoplayHoverPause:true,
              dots: false,
              nav: false,
              items:4
          });
      }

    }; // end


    var service_slider = function(){

       /*------------------------------------------
        = RECENT CASE SECTION SHOW HIDE
        -------------------------------------------*/
        if($('.service-thumbs').length){
            $('.service-thumb').on('click', function(e) {
                e.preventDefault();
                var target = $($(this).attr('data-case'));
                $('.service-thumb').removeClass('active-thumb');
                $(this).addClass('active-thumb');
                $('.service-content .service-data').hide(0);
                $('.service-data').fadeOut(300).removeClass('active-service-data');
                $(target).fadeIn(300).addClass('active-service-data');
            });
        }


    }; // end



    var portfolio_slider = function(){

        /*------------------------------------------
            = FUNCTION FORM SORTING GALLERY
        -------------------------------------------*/
        function sortingGallery() {
            if ($(".sortable-gallery .gallery-filters").length) {
                var $container = $('.gallery-container');
                $container.isotope({
                    filter:'*',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });

                $(".gallery-filters li a").on("click", function() {
                    $('.gallery-filters li .current').removeClass('current');
                    $(this).addClass('current');
                    var selector = $(this).attr('data-filter');
                    $container.isotope({
                        filter:selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });
                    return false;
                });
            }
        }

        sortingGallery();

    }; // end



    var testimonials_slider = function(){
     
        /*------------------------------------------
        = Testimonial SLIDER
        -------------------------------------------*/
        if ($(".wpo-testimonial-wrap").length) {
            $(".wpo-testimonial-wrap").owlCarousel({
                autoplay: false,
                smartSpeed: 300,
                margin: 20,
                loop:true,
                fade:true,
                autoplayHoverPause:true,
                dots: true,
                nav: false,
                items: 1,
            });
        }

    }; // end


    
    var odometer = function(){

       /*------------------------------------------
        = FUNFACT
        -------------------------------------------*/
        if ($(".odometer").length) {
            $('.odometer').appear();
            $(document.body).on('appear', '.odometer', function(e) {
                var odo = $(".odometer");
                odo.each(function() {
                    var countNumber = $(this).attr("data-count");
                    $(this).html(countNumber);
                });
            });
        }



    }; // end


    var team_slider = function(){

      /*------------------------------------------
      = TEAM SECTION
      -------------------------------------------*/
      var singleMember = $('.wpo-team-section .social');
      singleMember.on('click', function () {
          $(this).toggleClass('active');
      });

    }; // end


    var partners_slider = function(){

        if ($(".clents-slider").length) {
            $('.clents-slider').owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                dots:false,
                autoplay: true,
                smartSpeed:1200,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 6
                    }
                }
            })
        }

    }; // end




    


  	//Hero Client Slider
  	elementorFrontend.hooks.addAction( 'frontend/element_ready/wpo-canun_hero.default', function($scope, $){
  		hero_client_slider();
  	} );

    //Slider
    elementorFrontend.hooks.addAction( 'frontend/element_ready/wpo-canun_slider.default', function($scope, $){
      swiper_slide();
    } );

    //sliderBgSetting
    elementorFrontend.hooks.addAction( 'frontend/element_ready/wpo-canun_slider.default', function($scope, $){
        sliderBgSetting();
    } );


    //service_slider
    elementorFrontend.hooks.addAction( 'frontend/element_ready/wpo-canun_service.default', function($scope, $){
        service_slider();
    } );

    //portfolio_slider
    elementorFrontend.hooks.addAction( 'frontend/element_ready/wpo_consultar_case_filter.default', function($scope, $){
        portfolio_slider();
    } );


    //attorney
    elementorFrontend.hooks.addAction( 'frontend/element_ready/wpo-canun_team.default', function($scope, $){
        team_slider();
    } );


    //testimonial
    elementorFrontend.hooks.addAction( 'frontend/element_ready/wpo-canun_testimonial.default', function($scope, $){
        testimonials_slider();
    } );

    //odometer
    elementorFrontend.hooks.addAction( 'frontend/element_ready/wpo-canun_funfact.default', function($scope, $){
        odometer();
    } );

    //partners_slider
    elementorFrontend.hooks.addAction( 'frontend/element_ready/wpo-canun_client.default', function($scope, $){
        partners_slider();
    } );

} );


})(jQuery);  