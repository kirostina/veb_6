function deleteSelectedRows() {
  const table = document.getElementById("userTable");
  const checkboxes = table.querySelectorAll(
    'tbody input[type="checkbox"]:checked'
  );
  checkboxes.forEach((checkbox) => {
    table.deleteRow(checkbox.parentNode.parentNode.rowIndex);
  });
}

function duplicateSelectedRows() {
  const table = document.getElementById("userTable");
  const checkboxes = table.querySelectorAll(
    'tbody input[type="checkbox"]:checked'
  );
  checkboxes.forEach((checkbox) => {
    const originalRow = checkbox.parentNode.parentNode;
    const newRow = table.insertRow(originalRow.rowIndex + 1);
    for (let i = 0; i < 4; i++) {
      const cell = newRow.insertCell(i);
      cell.innerHTML = originalRow.cells[i].innerHTML;
    }
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newRow.insertCell(4).appendChild(newCheckbox);
  });
}
