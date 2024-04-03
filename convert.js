function validateBinary(input) {
  return /^[01]+$/.test(input);
}

function validateOctal(input) {
  return /^[0-7]+$/.test(input);
}

function validateDecimal(input) {
  return /^[0-9]+$/.test(input);
}

function validateHexadecimal(input) {
  return /^[0-9A-Fa-f]+$/.test(input);
}

function convert(from) {
  let inputValue = document.getElementById(from).value;

  if (inputValue === "") {
    clearFields();
    return;
  }

  let decimalValue;

  switch (from) {
    case "binary":
      if (!validateBinary(inputValue)) {
        alert("Invalid binary input!");
        clearFields();
        return;
      }
      decimalValue = parseInt(inputValue, 2);
      break;
    case "octal":
      if (!validateOctal(inputValue)) {
        alert("Invalid octal input!");
        clearFields();
        return;
      }
      decimalValue = parseInt(inputValue, 8);
      break;
    case "decimal":
      if (!validateDecimal(inputValue)) {
        alert("Invalid decimal input!");
        clearFields();
        return;
      }
      decimalValue = parseInt(inputValue, 10);
      break;
    case "hexadecimal":
      if (!validateHexadecimal(inputValue)) {
        alert("Invalid hexadecimal input!");
        clearFields();
        return;
      }
      decimalValue = parseInt(inputValue, 16);
      break;
    default:
      return;
  }

  document.getElementById("binary").value = decimalValue.toString(2);
  document.getElementById("octal").value = decimalValue.toString(8);
  document.getElementById("decimal").value = decimalValue;
  document.getElementById("hexadecimal").value = decimalValue
    .toString(16)
    .toUpperCase();
}

function clearFields() {
  document.getElementById("binary").value = "";
  document.getElementById("octal").value = "";
  document.getElementById("decimal").value = "";
  document.getElementById("hexadecimal").value = "";
}
