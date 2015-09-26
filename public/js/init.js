(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

var pattern = Trianglify({
  width: window.innerWidth,
  height: window.innerHeight,
  x_colors: 'Purples'

});
document.getElementById('landing_image').appendChild(pattern.canvas());