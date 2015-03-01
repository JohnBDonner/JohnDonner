var viewMode = false;
var arr;
var index;
var picNum;

function findNums(string) {
	var i = 0;
	while (!$.isNumeric(string.charAt(i))) i++;
	var j = i;
	while ($.isNumeric(string.charAt(j))) j++;
	return string.substring(i, j);
} 

$(document).ready(function () {

	$("#view-bucket").click(function(event) {
    	event.preventDefault();
    	viewMode = true;
    	$(".pic-view-bg").fadeIn(400);
    	$(".full-pictures").fadeIn(400);
    	arr = $(".full-pictures").children().map(function() { return $(this).attr('class') }).get();
    	index = 0;
    	picNum = findNums(arr[index]);
    	$("."+picNum).fadeIn(400);
    	$("."+picNum).css("z-index", "15");
	});

	$(".pic-view-bg").click(function(event) {
		viewMode = false;
    	event.preventDefault();
    	$(this).fadeOut(400);
    	$(".full-pictures").fadeOut(400);
    	$(".pic").fadeOut(400);
	});

});

$(document).keydown(function(e) {
	if (viewMode) {
		switch(e.which) {
			case 37: // left
				$("."+picNum).fadeOut(1);
				if (index == 0)
					index = arr.length - 1;
				else
					index--;
				picNum = findNums(arr[index]);
				$("."+picNum).fadeIn(1);
			break;

			case 39: // right
				$("."+picNum).fadeOut(1);
				if (index == arr.length - 1)
					index = 0;
				else
					index++;
				picNum = findNums(arr[index]);
				$("."+picNum).fadeIn(1);
			break;

			default: return;
		}
		e.preventDefault();
	}
});
