/***********************************************
*
* 2013 - The Mechanism
* Author - Ben Chirlin
* Description - Trigger a JS function whenever a
*               getSkeleton CSS breakpoint is
*				triggered
*
* THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY 
* KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
* PARTICULAR PURPOSE.
*
***********************************************/

// Self contained function, it's good practice!
(function(){
	// Persistent variable for current container width
	var contW;
	// Inititailize the variable on document ready
	$(document).ready(function () {
		contW = $(".container").width();
	});
	
	// On resize, if a skeleton query is hit, call following functions
	$(window).resize(function(){
		var contC = $(".container").width();
		if (contC != contW) {
			/* PERFORM YOUR TRIGGERED FUNCTIONS */
			contW = contC;
		}
	});
	
})();