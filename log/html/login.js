document.getElementById('log').onclick = function() {
	let second = document.getElementById('second-name').value;
	let first = document.getElementById('first-name').value;
	let patronymic = document.getElementById('patronymic').value;
	let institute = document.getElementById('institute').value;
	let group = document.getElementById('group').value;
	let department = document.getElementById('department').value;
	let password = document.getElementById('password').value;

	if (second == 'Теплова' && first == 'Лидия' && patronymic == 'Васильевна' &&  institute == 'ИРИТ' && group == '16В1' && department == 'ВСТ' &&password == 'test' )
		location.href="page 1 (9).html";
	else alert('Неправильно введены данные! Выполните проверку и повторите попытку.');
}
