function addQ(el) {
	new_value = parseInt(el.previousElementSibling.innerHTML, 10) + 1;
	el2 = el;
	for (; el2.matches(".product-container") == false; el2 = el2.parentNode) {}
	 	if (parseInt(el2.querySelectorAll(".stock")[0].getAttribute("stock"), 10) >= new_value) {
		el.previousElementSibling.innerHTML = new_value;
	}
}

function subQ(el) {
	new_value = parseInt(el.nextElementSibling.innerHTML, 10) - 1;
	if (new_value < 0) {
		new_value = 0;
	}
	el.nextElementSibling.innerHTML = new_value;
}

function hide_stock() {
	document.querySelectorAll(".stock").forEach(function(el) {
		el.classList.toggle("hide");
	});
}

function load_stock() {

	document.querySelectorAll(".stock").forEach(function(el) {
		stock_att = document.createAttribute("stock");
		stock_att.value = el.innerHTML.split(" ")[2];
		el.setAttributeNode(stock_att);

	});
}




var content = document.querySelector("#content");

var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };

var getHeight = function (item) {return item.getBoundingClientRect().height; };

var resizeAll = function () {
    var altura = getVal(content, 'grid-auto-rows');
    var gap = getVal(content, 'grid-row-gap');
    content.querySelectorAll('.product-container').forEach(function (item) {
        var el = item.parentElement;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};

window.addEventListener('resize', resizeAll);

content.querySelectorAll('.product-container').forEach(function (item) {
    item.parentElement.addEventListener('click', function (event) {        
        if (event.target.tagName != "BUTTON" && event.target.tagName != "INPUT"){
        	item.parentElement.classList.toggle('full');        
        }
    });
});
