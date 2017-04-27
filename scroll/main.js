$(function () {

  // caching the main element
var scrollButton = $(".scroll-up");

// on window scrolling
$(window).scroll(function(){

if  ($(this).scrollTop() >= 300){

  scrollButton.show();
}
else {
  scrollButton.hide();
}

});

scrollButton.click(function () {
  $("html,body").animate({ scrollTop: 0}, 200);
});
});
