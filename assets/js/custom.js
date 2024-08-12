$(document).ready(function () {
  // AOS.init({
  //   duration: 1200,
  //   easing: "ease-in-out",
  //   once: true,
  //   mirror: false,
  // });
  new PureCounter({
    once: false,
    pulse: false,
    formater: "us-US",
    separator: true,
    decimals: 0,
    delay: 10, 
  });
});


$(document).ready(function () {
  var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: true,
    masonry: {
      columnWidth: ".all",
    },
  });

 $(".banner").hover(function () {
    //$(".animate__left").toggleClass("active");
   // $(".animate__right").toggleClass("active");
 });


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 10) {
         $(".animate__left").toggleClass("active");
    $(".animate__right").toggleClass("active");
    }
}); //missing )

});
$(".slider__achiev").owlCarousel({
  loop: false,
  margin: 30,
  autoplay: false,
  dots: false,
  nav: true,
  autoplayTimeout: 7000,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
});
$(".works__grid__carousel").owlCarousel({
  loop: true,
  margin: 30,
  autoplay: true,
  dots: false,
  nav: true,
  autoplayTimeout: 3000,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});




$(document).ready(function () {    
   $('.interviews_list_slider').slick( {
    autoplay: false,
    autoplaySpeed: 7000,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,  
    responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
  });  

  $('.casestudy-slider32132132').slick( {
    autoplay: false,
    autoplaySpeed: 7000,
     centerMode: true,
     centerPadding: '100px',
    slidesToShow: 4,
    slidesToScroll: 1, 
    infinite: true,
     variableWidth: true,
     variableHeight: true,
    arrows: true,
    dots: false,  
    responsive: {
    0: {
      slidesToShow: 1,
    },
    600: {
      slidesToShow: 4,
    },
    1000: {
      slidesToShow: 4,
    },
  },
  });
  $('.casestudy-slider').slick({
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        // arrows: false,
        centerMode: false,
        centerPadding: '0',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        // arrows: false,
        centerMode: false,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
}); 



} );  



$(document).ready(function() {
    // $('a[href*=#]').bind('click', function(e) {
    //     e.preventDefault(); // prevent hard jump, the default behavior

    //     var target = $(this).attr("href"); // Set the target as variable

    //     // perform animated scrolling by getting top-position of target-element and set it as scroll target
    //     $('html, body').stop().animate({
    //         scrollTop: $(target).offset().top
    //     }, 600, function() {
    //         location.hash = target; //attach the hash (#jumptarget) to the pageurl
    //     });

    //     return false;
    // });


$(function () {

    $(window).on('scroll', function () {
        var navHeight = $('.header').height();
        if ($(window).scrollTop() > navHeight) {
            $('.header').addClass('header-scrolled');
        } else {
            $('.header').removeClass('header-scrolled');
        }
    });

});

// Hide Header on on scroll down


$(function () {

    $("#burger").on('click', function () {
            $(this).toggleClass('active');
        $(" #navmenu, #nav-overlay, #navmenu_box").toggleClass("open");
    });



    $(window).resize(resizeNav);
    resizeNav();
});

});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //    $('nav').fadeIn("fast");
    //} else {
    //    $('nav').fadeOut("fast");
    //}
  
    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.sidemenu li.active').removeClass('active');
            $('.sidemenu li').eq(i).addClass('active');
        }
    });
}).scroll();



