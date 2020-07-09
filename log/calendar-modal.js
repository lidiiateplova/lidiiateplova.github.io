var modal = document.getElementById('modal-window');
var eve = document.getElementsByClassName('day');
var span = document.getElementsByClassName("close")[0];

eve.onclick = function() {
	modal.style.display = "block";
}

span.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.targer == modal) {
		modal.style.display = "none";
	}
}