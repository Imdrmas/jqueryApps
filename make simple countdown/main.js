$(function () {

var ourCountdown = setInterval(function () {

var counter = parseInt($('.countdown').html());

if (counter !== 0) {

  $('.countdown').html(counter - 1);

}
else {

clearInterval(ourCountdown);

$('.countdown').html('finished');

}

}, 500);

});
