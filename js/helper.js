var form = document.getElementById("myForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var dataInput1 = document.getElementById("dataInput1").value;
  var dataInput2 = document.getElementById("dataInput2").value;
  // Додайте інші поля вводу, якщо потрібно

  var dataTable = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];
  var newRow = dataTable.insertRow(dataTable.rows.length);
  var cell1 = newRow.insertCell(0);
  cell1.textContent = dataInput1;
  var cell2 = newRow.insertCell(1);
  cell2.textContent = dataInput2;
  // Додайте інші стовпці, якщо потрібно

  document.getElementById("dataInput1").value = "";
  document.getElementById("dataInput2").value = "";
  // Очистити поля вводу
});
