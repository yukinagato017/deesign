function showImages(el) {
var windowHeight = jQuery( window ).height();
$(el).each(function(){
var thisPos = $(this).offset().top;
var topOfWindow = $(window).scrollTop();
if (topOfWindow + windowHeight - 100 > thisPos ) {
$(this).addClass("fadeIn");
}
});
}
$(document).ready(function(){
showImages('img');
});
$(window).scroll(function() {
showImages('img');
});