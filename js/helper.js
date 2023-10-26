document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Додавання даних до таблиці
    const table = document
      .getElementById("userTable")
      .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(table.rows.length);
    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = email;
    newRow.insertCell(2).innerHTML = phone;
    newRow.insertCell(3).innerHTML = gender;

    // Додавання чекбоксу для вибору рядку
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newRow.insertCell(4).appendChild(checkbox);

    // Очистити форму
    document.getElementById("registrationForm").reset();
  });
