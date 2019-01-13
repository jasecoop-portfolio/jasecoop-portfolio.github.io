var jquery = require('./lib/jquery');
// var history = require('./modules/history');
// var jekyllAjax = require('./modules/jekyllAjax');
var bx = require('./lib/bxslider');
var fHorz = require('./modules/fHorz');
var slider = require ('./modules/slider')

jquery();
bx();
fHorz();
slider();


$( document ).ready(function() {

  $( ".link" ).hover(
    function() {
      var postId = $(this).attr('data-postId');
      console.log(postId)

      $( '#video-' + postId ).addClass( "video-active" );
      $('#video-' + postId + ' video')[0].play();
      $( '#video-' + postId + ' .hide' ).hide();
      // $('audio')[0].play();
    }, function() {

      $('.video-active video')[0].currentTime = 0;
      $('.video-active .hide').show();
      $( '.video-active' ).removeClass( "video-active" );
    }
  );


  console.log('hi');
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop() - ($(window).height()/2);
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $(window).on('resize scroll', function() {
    $('.project').each(function() {
        var activeProject = $(this).attr('id');
      if ($(this).isInViewport()) {
        $('.project-active').removeClass('project-active');
        $('#link-' + activeProject).addClass('project-active');
        $('body').attr('id', activeProject + '-active');
      }
    });
  });

  $("#button").click(function() {
      $('html, body').animate({
          scrollTop: $("#myDiv").offset().top
      }, 2000);
  });

  $(".vid-play").click(function() {
      $(".vid-play").hide();
      $('.hero-vid').get(0).play();
  });


});


