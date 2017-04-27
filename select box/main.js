$(function () {

for (var i = 1; i <= 31; i++){

  $("<option>", {value: i, text: i}).appendTo($('#days'));
}

});
