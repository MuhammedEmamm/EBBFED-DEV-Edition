
  jQuery(document).ready(function($) {

    'use strict';
      //***************************
      // Sticky Header Function
      //***************************
      jQuery(window).scroll(function() {
          if (jQuery(this).scrollTop() > 170){  
              jQuery('body').addClass("sportsmagazine-sticky");
          }
          else{
              jQuery('body').removeClass("sportsmagazine-sticky");
          }
      });
  
    
  
      //***************************
      // Click to Top Button
      //***************************
      jQuery('.sportsmagazine-back-top,.sportsmagazine-top-back').on("click", function() {
          jQuery('html, body').animate({
              scrollTop: 0
          }, 800);
          return false;
      });
      //***************************
      // Parent AddClass Function
      //***************************
      jQuery(".sportsmagazine-dropdown-menu,.sportsmagazine-megamenu").parent("li").addClass("subdropdown-addicon");
  
      //***************************
      // Fancybox Function
      //***************************
      jQuery(".fancybox").fancybox({
        openEffect  : 'elastic',
        closeEffect : 'elastic',
      });
  
      //***************************
      // Counter Function
      //***************************
      jQuery('#word-count1').jQuerySimpleCounter({
        end:3500,
        duration: 5000
      });
      jQuery('#word-count2').jQuerySimpleCounter({
        end:124,
        duration: 5000
      });
      jQuery('#word-count3').jQuerySimpleCounter({
        end:179,
        duration: 5000
      });
      jQuery('#word-count4').jQuerySimpleCounter({
        end:300,
        duration: 5000
      });
      
      // Masonry Functions
      jQuery('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          fitWidth: true
        }
      });
      //***************************
      // CartToggle Function
      //***************************
      jQuery('a.sportsmagazine-open-cart').on("click", function(){
            jQuery('.sportsmagazine-cart-box').slideToggle('slow');
            return false;
        });
        jQuery('html').on("click", function() { jQuery(".sportsmagazine-cart-box").fadeOut(); });
  
      //***************************
      // Progressbar Function
      //***************************
      jQuery('.progressbar1').progressBar({
        percentage : false,
        animation : true,
        backgroundColor : "#ececec",
        barColor : "#ffdc11",
        height : "12",
      });
  
      //***************************
      // Countdown Function
      //***************************
      jQuery(function() {
          var austDay = new Date();
          austDay = new Date(austDay.getFullYear() + 2, 1 - 1, -600);
          jQuery('#sportsmagazine-countdown,#sportsmagazine-game-countdown,#sportsmagazine-banner-countdown').countdown({
              until: austDay
          });
          jQuery('#year').text(austDay.getFullYear());
      });
      
  
  });  



