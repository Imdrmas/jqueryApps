$(function () {

// get the click li id and cache it in my variable

$("#my-tabs li").click(function()
{

  // removeclass inactive li and add it to other li in the same ul

var myID = $(this).attr("id");

$(this).removeClass("inactive").siblings().addClass("inactive");

// hide all divs when click on the li

$(".my-container div").hide();


// get the id from the same li id and add -content
$("#" + myID + "-content").fadeIn("1000");

});
});
