form = document.getElementById("myForm");
var dataTable = document
  .getElementById("dataTable")
  .getElementsByTagName("tbody")[0];
var duplicateButton = document.getElementById("duplicateButton");
var deleteButton = document.getElementById("deleteButton");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var dataInput1 = document.getElementById("dataInput1").value;
  var dataInput2 = document.getElementById("dataInput2").value;
  var dataInput3 = document.getElementById("dataInput3").value;

  var newRow = dataTable.insertRow(dataTable.rows.length);

  var cell1 = newRow.insertCell(0);
  var selectCheckbox = document.createElement("input");
  selectCheckbox.type = "checkbox";
  cell1.appendChild(selectCheckbox);
  var cell2 = newRow.insertCell(1);
  cell2.textContent = dataInput1;

  var cell3 = newRow.insertCell(2);
  cell3.textContent = dataInput2;

  var cell4 = newRow.insertCell(3);
  cell4.textContent = dataInput3;

  var cell5 = newRow.insertCell(4);
  var actionCheckbox = document.createElement("input");
  actionCheckbox.type = "checkbox";
  cell5.appendChild(actionCheckbox);
  document.getElementById("dataInput1").value = "";
  document.getElementById("dataInput2").value = "";
  document.getElementById("dataInput3").value = "";
});

// Функція для дублювання обраних рядків
duplicateButton.addEventListener("click", function () {
  var rows = dataTable.rows;

  for (var i = rows.length - 1; i >= 0; i--) {
    var row = rows[i];
    var actionCheckbox = row.cells[4].querySelector("input[type=checkbox]");
    if (actionCheckbox.checked) {
      var newRow = dataTable.insertRow(i + 1);
      newRow.innerHTML = row.innerHTML;
    }
  }
});

// Функція для видалення обраних рядків
deleteButton.addEventListener("click", function () {
  var rows = dataTable.rows;
  for (var i = rows.length - 1; i >= 0; i--) {
    var row = rows[i];
    var actionCheckbox = row.cells[4].querySelector("input[type=checkbox]");

    if (actionCheckbox.checked) {
      dataTable.deleteRow(i);
    }
  }
});
