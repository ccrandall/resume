var animateScroll = {
    toTop: function () {  
      $("a[href='#top']").click(function () {
          $("html, body").animate({ scrollTop: 0 }, "slow");
          return false;
      });
      $('.navbar-inverse').on('click', 'li a', function () {
          $('.navbar-inverse .in').addClass('collapse').removeClass('in').css('height', '1px');
      });
    },
    onePageNav: function () {

        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
              if (window.outerWidth <= 760) {
                $(".navbar-toggle").toggleClass('collapsed');
              }
            },
            end: function () {
            },
            scrollChange: function ($currentListItem) {
            }
        });
    },
    init: function () {
        animateScroll.onePageNav();
        animateScroll.toTop();
    }
}
$('document').ready(function () {
    animateScroll.init();
});