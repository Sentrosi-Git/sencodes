/*-----
Spanizer
- Wraps letters with spans, for css animations
-----*/
(function($) {
  var s,
  spanizeLetters = {
    settings: {
      letters: $('.js-spanize'),
    },
    init: function() {
      s = this.settings;
      this.bindEvents();
    },
    bindEvents: function(){
      s.letters.html(function (i, el) {
        //spanizeLetters.joinChars();
        var spanizer = $.trim(el).split("");
        return '<span>' + spanizer.join('</span><span>') + '</span>';
      });
    },
  };
  spanizeLetters.init();
})(jQuery);

$('.hula-close').click(function(e) {
    e.preventDefault();
    $('#hula-modal').addClass('animated zoomOut')

      setTimeout( function () {
        $('#cocanvas-modal').removeClass('animated zoomOut');
      }, 550);

      $('.cocanvas-modal-overlay').fadeOut(200);
    });

  $('#cocanvas-thumb').click(function(e) {
    e.preventDefault();
    $('.cocanvas-modal-overlay').fadeIn(200);
    $('#cocanvas-modal').addClass('animated zoomIn');
  });

  $('.origame-close').click(function(e) {
    e.preventDefault();
    $('#origame-modal').addClass('animated zoomOut')

      setTimeout( function () {
        $('#origame-modal').removeClass('animated zoomOut');
      }, 550);

      $('.origame-modal-overlay').fadeOut(200);
    });

  $('#origame-thumb').click(function(e) {
    e.preventDefault();
    $('.origame-modal-overlay').fadeIn(200);
    $('#origame-modal').addClass('animated zoomIn');
  });


  $('.tech-close').click(function(e) {
    e.preventDefault();
    $('#tech-modal').addClass('animated zoomOut')

      setTimeout( function () {
        $('#tech-modal').removeClass('animated zoomOut');
      }, 550);

      $('.tech-modal-overlay').fadeOut(200);
    });

  $('#tech-thumb').click(function(e) {
    e.preventDefault();
    $('.tech-modal-overlay').fadeIn(200);
    $('#tech-modal').addClass('animated zoomIn');
  });

  $('.ph-close').click(function(e) {
    e.preventDefault();
    $('#ph-modal').addClass('animated zoomOut')

      setTimeout( function () {
        $('#ph-modal').removeClass('animated zoomOut');
      }, 550);

      $('.ph-modal-overlay').fadeOut(200);
    });

  $('#ph-thumb').click(function(e) {
    e.preventDefault();
    $('.ph-modal-overlay').fadeIn(200);
    $('#ph-modal').addClass('animated zoomIn');
  });


  $('.tictac-close').click(function(e) {
    e.preventDefault();
    $('#tictac-modal').addClass('animated zoomOut')

      setTimeout( function () {
        $('#tictac-modal').removeClass('animated zoomOut');
      }, 550);

      $('.tictac-modal-overlay').fadeOut(200);
    });

  $('#tictac-thumb').click(function(e) {
    e.preventDefault();
    $('.tictac-modal-overlay').fadeIn(200);
    $('#tictac-modal').addClass('animated zoomIn');
  });


  $('.burning-close').click(function(e) {
    e.preventDefault();
    $('#burning-modal').addClass('animated zoomOut')

      setTimeout( function () {
        $('#burning-modal').removeClass('animated zoomOut');
      }, 550);

      $('.burning-modal-overlay').fadeOut(200);
    });

  $('#burning-thumb').click(function(e) {
    e.preventDefault();
    $('.burning-modal-overlay').fadeIn(200);
    $('#burning-modal').addClass('animated zoomIn');
  });

});
