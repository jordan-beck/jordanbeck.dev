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

