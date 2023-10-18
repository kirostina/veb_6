function validateField(inputElement, errorElement) {
  var inputValue = inputElement.value;

  if (inputValue === "") {
    errorElement.textContent = "Це поле не може бути порожнім.";
    errorElement.style.display = "block";
    return false;
  } else {
    errorElement.style.display = "none";
    return true;
  }
}

var dataInput1 = document.getElementById("dataInput1");
var error1 = document.getElementById("error1");
var dataInput2 = document.getElementById("dataInput2");
var error2 = document.getElementById("error2");

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var isDataInput1Valid = validateField(dataInput1, error1);
  var isDataInput2Valid = validateField(dataInput2, error2);

  if (isDataInput1Valid && isDataInput2Valid) {
  }
});
