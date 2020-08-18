$(document).ready(function () {

    (function($) {
      var IS_IOS = /iphone|ipad/i.test(navigator.userAgent);
      $.fn.nodoubletapzoom = function() {
        if (IS_IOS)
          $(this).bind('touchstart', function preventZoom(e) {
            var t2 = e.timeStamp
              , t1 = $(this).data('lastTouch') || t2
              , dt = t2 - t1
              , fingers = e.originalEvent.touches.length;
            $(this).data('lastTouch', t2);
            if (!dt || dt > 500 || fingers > 1) return;
    
            e.preventDefault();
            $(this).trigger('click').trigger('click');
          });
      };
    })(jQuery);

   // SLIDER INITIALIZATION==================================================
   $(".js-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });
// ===========================================================================
setInterval(function rewrite() {
  let a = document.getElementById("svg-container").innerHTML = "<svg viewBox='0 0 1280 371' fill='none' xmlns='http://www.w3.org/2000/svg' class='header__svg' preserveAspectRatio='xMinYMin meet'><path  class='line7' d='M1098 133.303L1109.26 141.351L1109.25 125.247L1098 133.303Z'/><line class='line6' x2='1109' y2='133' x1='1278' y1='133' stroke-width='2'/><line class='line5' x1='1279' y1='368' x2='1279' y2='132' stroke-width='2'/><line class='line4' x2='1280' y2='369.114' x1='2.00008' y1='369.114' stroke-width='2'/><line class='line3' x2='1' y2='369' x1='1' y1='198' stroke-width='2'/><line class='line2' x2='1' y2='99.9742' x1='1' y1='2.28882e-05' stroke-width='2'/> <line class='line1' x1='64' y1='1' y2='1' stroke-width='2'/></svg>";
}, 4000);

if ($(window).width() <= '1400') {
  setInterval(function rewrite() {
    let a = document.getElementById("svg-container").innerHTML = "<svg viewBox='0 0 1280 371' fill='none' xmlns='http://www.w3.org/2000/svg' class='header__svg' preserveAspectRatio='xMinYMin meet'><path  class='line7' d='M1098 133.303L1109.26 141.351L1109.25 125.247L1098 133.303Z'/><line class='line6' x2='1109' y2='133' x1='1278' y1='133' stroke-width='2'/><line class='line5' x1='1279' y1='368' x2='1279' y2='132' stroke-width='2'/><line class='line4' x2='1280' y2='369.114' x1='2.00008' y1='369.114' stroke-width='2'/><line class='line3' x2='1' y2='369' x1='1' y1='90' stroke-width='2'/><line class='line2' x2='1' y2='99.9742' x1='1' y1='2.28882e-05' stroke-width='2'/> <line class='line1' x1='64' y1='88' y2='88' stroke-width='2'/></svg>";
  }, 4000);
}
});  