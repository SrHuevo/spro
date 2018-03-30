document.onreadystatechange = function () {
	if (document.readyState == "complete") {
		addEventListener("mousedown", function (event) {
			event.stopPropagation();
		}, true);

		var layer = document.getElementsByClassName('bpd')[0]
		layer.parentNode.removeChild(layer)
	}
}