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
setTimeout(function rewrite() {
  let a = document.getElementById("svg-container").innerHTML = "<svg viewBox='0 0 1280 371' fill='none' xmlns='http://www.w3.org/2000/svg' class='header__svg' preserveAspectRatio='xMinYMin meet'><path  class='line7' d='M1098 133.303L1109.26 141.351L1109.25 125.247L1098 133.303Z'/><line class='line6' x2='1109' y2='133' x1='1278' y1='133' stroke-width='2'/><line class='line5' x1='1279' y1='368' x2='1279' y2='132' stroke-width='2'/><line class='line4' x2='1280' y2='369.114' x1='2.00008' y1='369.114' stroke-width='2'/><line class='line3' x2='1' y2='369' x1='1' y1='198' stroke-width='2'/><line class='line2' x2='1' y2='99.9742' x1='1' y1='2.28882e-05' stroke-width='2'/> <line class='line1' x1='64' y1='1' y2='1' stroke-width='2'/></svg>";
}, 2000);

if ($(window).width() <= '1024') {
  setTimeout(function rewrite() {
    let a = document.getElementById("svg-container").innerHTML = "<svg width='546' height='574' viewBox='0 0 546 574' fill='none' xmlns='http://www.w3.org/2000/svg' class='header__svg' preserveAspectRatio='xMinYMin meet'><line x1='25' y1='362' y2='362' stroke-width='2' class='line1'/><line x1='1' y1='361' x2='1' y2='412' stroke-width='2' class='line2'/><line x1='1' y1='467' x2='1' y2='574' stroke-width='2' class='line3'/><line y1='573' x2='546' y2='573' stroke-width='2' class='line4'/><line x1='545' y1='574' x2='545' y2='6' stroke-width='2' class='line5'/><line x1='546' y1='7' x2='333' y2='7' stroke-width='2' class='line6'/><path d='M324.002 6.01149L333.758 0.809146L333.753 12.3214L324.002 6.01149Z' class='line7'/></svg>";
  }, 2000);
}

if ($(window).width() <= '767') {
  setTimeout(function rewrite() {
    let a = document.getElementById("svg-container").innerHTML = "<svg width='288' height='488' viewBox='0 0 288 488' fill='none' xmlns='http://www.w3.org/2000/svg' class='header__svg'><line x1='26.9845' y1='323.403' x2='0.98452' y2='323' stroke-width='2' class='line1'/><line x1='2' y1='322' x2='2' y2='367' stroke-width='2' class='line2'/><line x1='2' y1='405' x2='2' y2='488' stroke-width='2' class='line3'/><line x1='1' y1='487' x2='288' y2='487' stroke-width='2' class='line4'/><line x1='287' y1='488' x2='287' y2='4.25827' stroke-width='2' class='line5'/><line x1='287.995' y1='5.25829' x2='236.995' y2='5.02305' stroke-width='2' class='line6'/><path d='M232.309 5.11974L237.437 0.689121L237.435 9.55676L232.309 5.11974Z' class='line7'/></svg>";
  }, 2000);
}
});  