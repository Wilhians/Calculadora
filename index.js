let result = document.getElementById("result");

function appendToResult(value) {
  // Verificar se o último caractere é um operador (+, -, *, /) antes de adicionar outro operador
  const lastChar = result.value.charAt(result.value.length - 1);
  if (
    (value === "+" || value === "-") &&
    (lastChar === "+" || lastChar === "-")
  ) {
    return;
  }
  if (
    (value === "*" || value === "/") &&
    (lastChar === "*" || lastChar === "/")
  ) {
    return;
  }

  result.value += value;
}

function calculate() {
  try {
    const expression = result.value;
    if (expression !== "") {
      result.value = eval(expression);
    }
  } catch (error) {
    result.value = "Operação incorreta!";
  }
}

function clearResult() {
  result.value = "";
}
