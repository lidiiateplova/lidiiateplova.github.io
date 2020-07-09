let table2 = document.getElementById('active-group_table');

let editingTd2;

table2.onclick = function(event) {
  let target = event.target.closest('.edit-cancel,.edit-ok,td');
  if (!table2.contains(target)) return;
  if (target.className == 'edit-cancel') {
    finishTdEdit(editingTd2.elem, false);
  } else if (target.className == 'edit-ok') {
    finishTdEdit(editingTd2.elem, true);
  } else if (target.nodeName == 'TD') {
    if (editingTd2) return;
    makeTdEditable(target);
  }
};

function makeTdEditable(td) {
  editingTd2 = {
    elem: td,
    data: td.innerHTML
  };
  td.classList.add('edit-td'); 
  let textArea = document.createElement('textarea');
  textArea.style.width = td.clientWidth+ 'px';
  textArea.style.height = '20px';
  textArea.className = 'edit-area';
  textArea.value = td.innerHTML;
  td.innerHTML = '';
  td.appendChild(textArea);
  textArea.focus();
  td.insertAdjacentHTML("beforeEnd",
    '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
  );
}

function finishTdEdit(td, isOk) {
  if (isOk) {
    td.innerHTML = td.firstChild.value;
  } else {
    td.innerHTML = editingTd2.data;
  }
  td.classList.remove('edit-td');
  editingTd2 = null;
}