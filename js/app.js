//When user presses the arrow, other list items will either show or hide depending on current state

$(".header-nav-arrow").click(function() { //user clicks the nav arrow list item
	if ($(this).hasClass("open")) {  // if it's open, change the arrow to "closed" and hide the other list items
		$(this).removeClass("open").addClass("closed");
		$(".header-navigation li:nth-child(n+2)").hide();
	} else {
		$(this).removeClass("closed").addClass("open"); // if it's closed, change the arrow to "open" and show the other list items
		$(".header-navigation li:nth-child(n+2)").show();
	}
});