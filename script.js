/*---------------------------------------------
Clippy Headings
- Creates a scrolling cliprect effect on fixed headings
----------------------------------------------*/

(function($) {
  var s,
  clippy = {
    settings: {
      heading: $('.js-clippy'),
    },
    init: function() {
      s = this.settings;
      this.bindEvents();
    },
    bindEvents: function(){
      $(window).on("load resize scroll", $.proxy(this.getClippy, this));
    },

    getClippy: function(){
        s.heading.each(function() {
          var layerOffset = $(this).closest('article, section').offset(),
              containerOffset = layerOffset.top - $(window).scrollTop(),
              clippy = containerOffset - $(this).css("top").replace(/[^-\d\.]/g, '') - $(this).css("margin-top").replace(/[^-\d\.]/g, '');
          $(this).css('clip', 'rect('+ clippy +'px, auto, auto, auto)');
        });
    },
  };
   clippy.init();
})(jQuery);

/*Timer for (scroll) on Main Page*/
setTimeout(function() {
  $('#scroll').show()
}, 4200)

/* For Colored 'JB' Logo */
$('.txt').html(function(i, html) {
  var chars = $.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
});

/* Scrollspy */

$('body').scrollspy({ target: '#navbar' })
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
});

/*Navbar Expand Color*/

$('#navbarResponsive').on('show.bs.collapse', function () {
  $('.navbar').addClass('mobile-opened');
  $('.navbar').removeClass('navbar-dark');
  $('.navbar').addClass('navbar-light');
});

$('#navbarResponsive').on('hide.bs.collapse', function () {
  $('.navbar').removeClass('mobile-opened');
  $('.navbar').addClass('navbar-dark');
});

/*Multi Item Carousel */

$('.multi-item-carousel').on('slide.bs.carousel', function (e) {
  let $e = $(e.relatedTarget),
      itemsPerSlide = 3,
      totalItems = $('.carousel-item', this).length,
      $itemsContainer = $('.carousel-inner', this),
      it = itemsPerSlide - (totalItems - $e.index());
  if (it > 0) {
    for (var i = 0; i < it; i++) {
      $('.carousel-item', this).eq(e.direction == "left" ? i : 0).
        // append slides to the end/beginning
        appendTo($itemsContainer);
    }
  }
});