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

});


