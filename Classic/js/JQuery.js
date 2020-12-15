/*global $, alert, console*/
$(document).ready(function () {
    
    'use strict';
    
    /* make the height of header equal to window height */
    
    $(".header").height($(window).height());
    
    /* resize event to make the height keep in tough with screen*/
    $(window).resize(function () {
        
        $(".header").height($(window).height());
        
        $('.bxslider').each(function () {
       
            $(this).css('paddingTop', ($(window).height() - $(".bxslider li ").height()) / 2);
        
        });
        
    });
    
    $(".links li a").click(function () {
        
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    // trigger the bx slider 
    
    $('.bxslider').bxSlider({
        pager : false
    });
    
    // adjust the height of the slider
    
    $('.bxslider').each(function () {
        
       /*paddingTop to the slider equal (windowHeight - sliderContentHeight)/2
        to centrize the slider in the middle of the screen */
        
        $(this).css('paddingTop', ($(window).height() - $(".bxslider li ").height()) / 2);
        
    });
    
    // smooth scroll to any div
    
    $('.links li a').click(function () {
        
        $('body, html').animate({
            
            // scrollTop = divId.offset().top
            
            scrollTop : $('#' + $(this).data('value')).offset().top
            
        }, 1500);
        
        
        
    });
    
    // make slider for testim 
    
    /*self invoke function 
    
    (function f_name () {
    
    }());
    
    */
    (function autoSlider() {
            
        $('.slider .active').each(function () {
            // if the div is not the first child to the parent
            if (!$(this).is(':last-child')) {

                $(this).delay(3000).fadeOut(1000, function () {

                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        });
    }());
    
    // trigger mixitup
    
    $('#container').mixItUp();
    
    $('.our-proj .bebo li').click(function () {
        
        $(this).addClass('active').siblings().removeClass('active');
    });
});