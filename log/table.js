// var tds = document.querySelectorAll('td');

// for (var i = 0; i < tds.length; i++) {
// 	tds[i].addEventListener('click', function func() {

// 		var input = document.createElement('input');
// 		input.value = this.innerHTML;
// 		this.innerHTML = '';
// 		this.appendChild(input);

// 		var td = this;
// 		input.addEventListener('blur', function() {
// 			td.innerHTML = this.value;
// 			td.addEventListener('click', func);
// 		})

// 		this.removeEventListener('click', func);
// 	})
// }



function Add() {
	var name = document.getElementById('Name').value;
	var secondname = document.getElementById('Secondname').value;
	var patronymic = document.getElementById('Patronymic').value;
	var birth = document.getElementById('Birth').value;
	var phone_number = document.getElementById('Phone_number').value;
	var email = document.getElementById('Email').value;

	if(name && secondname && birth && phone_number && email) {
	// if(name || secondname || patronymic || birth || phone_number || email) {
		var tr = document.createElement('tr');

		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		var td3 = document.createElement('td');
		var td4 = document.createElement('td');
		var td5 = document.createElement('td');
		var td6 = document.createElement('td');

		var text1 = document.createTextNode(name);
		var text2 = document.createTextNode(secondname);
		var text3 = document.createTextNode(patronymic);
		var text4 = document.createTextNode(birth);
		var text5 = document.createTextNode(phone_number);
		var text6 = document.createTextNode(email);

		var table = document.querySelector("tbody");
		table.appendChild(tr);

		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		tr.appendChild(td6);

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		td5.appendChild(text5);
		td6.appendChild(text6);

		if (!tr.classList.contains('students__row')) {
            tr.classList.add('students__row');
        }
	} else alert("Введите данные корректно!");
}