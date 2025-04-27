$(function () {
    'use strict'

    // MENU
    $('.navbar .nav-link').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).on('scroll', function() {     
                                
        /*----------------------------------------------------*/
        /*  Navigtion Menu Scroll
        /*----------------------------------------------------*/    
        
        var b = $(window).scrollTop();
        
        if( b > 72 ){       
            $(".navbar").addClass("scroll");
        } else {
            $(".navbar").removeClass("scroll");
        }               
    });

    // TESTIMONIALS CAROUSEL
    $('#testimonials-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            900:{
                items:2,
            },
            1200:{
                items:3,
                loop:false
            }
        }
    })

    // SMOOTHSCROLL
    $(function() {
      $('.navbar .nav-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });   
     
  });

/* filepath: c:\Users\Yoga11e\Desktop\Personal Projects - Copy\Portfolio-Projects\francisco_resume\js\custom.js */
// Initialize Owl Carousel for Google Reviews
$(document).ready(function () {
    $("#google-reviews-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
        nav: false,
    });
});

// Sliding Text Effect
document.addEventListener("DOMContentLoaded", function () {
    const slidingText = document.getElementById("sliding-text");
    const texts = ["Web Developer", "Networking", "CCTV Installation"];
    let index = 0;

    function updateText() {
        slidingText.textContent = texts[index];
        index = (index + 1) % texts.length;
    }

    setInterval(updateText, 2000); // Change text every 2 seconds
    updateText(); // Initialize the first text
});
