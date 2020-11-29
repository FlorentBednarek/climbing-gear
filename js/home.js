// Initial state
var scrollPos = 0;
var url = 0;
var minimumTime = 150; // minimum ms between events
var canFireEvent = true;


if (window.location.href.endsWith("index.html", window.location.href.length)) {
	window.location.href = "index.html#home-1";
}


window.setInterval(function() {
	url = window.location.href.split("#")[1].split("-")[1];
	if (url == undefined || url.length != 1) {
		url = "1";
	}
}, 1000);
// adding scroll event
function handle_event() {
	// detects new state and compares it with the new one	
	if (document.getElementById('horizontal-wrapper').scrollTop > scrollPos) {
		if (url == window.location.href.split("#")[1].split("-")[1]) {
			url = parseInt(url) + 1;
			if (url > 5) {
				url = 5;
			}
			url = url.toString();
			window.location = "index.html#home-" + url;
		}
	} else {
		if (url == window.location.href.split("#")[1].split("-")[1]) {
			url = parseInt(url) - 1;
			if (url < 1) {
				url = 1;
			}
			url = url.toString();
			window.location = "index.html#home-" + url;
		}
	}
	// saves the new position for iteration.
	scrollPos = document.getElementById('horizontal-wrapper').scrollTop;
}

document.getElementById('horizontal-wrapper').addEventListener('scroll', function() {
	if (canFireEvent) {
		canFireEvent = false;
		window.setTimeout(function() {
			canFireEvent = true;
		}, minimumTime);
		handle_event();
		change_radio_on_scroll();
	}
});

function change_radio_on_scroll() {
	document.querySelectorAll(".side-menu")[0].childNodes.forEach(function(el) {
		if (el.onclick && el.getAttribute("onclick").split("-")[1][0] == window.location.href.split("#")[1].split("-")[1]) {
			el.previousElementSibling.checked = true;
		}
	});
}
change_radio_on_scroll();

function validate_form() {
	form = document.forms["contact_form"];

	mail = form["mail"].value;
	re = /\S+@\S+\.\S+/;
	if (re.test(mail) == false) {
		return false;
	}

	date = form["date de naissance"].value.split("-");
	if (date[0].length > 4 || date[1].length > 2 || date[2].length > 2) {
		return false;
	}
	return true;
}