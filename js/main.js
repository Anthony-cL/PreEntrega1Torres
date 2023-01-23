while (true) {
  // Pedir al usuario que ingrese 2 numeros por pantalla

  let num1 = parseFloat(prompt("Ingrese el primer número:"));
  let num2 = parseFloat(prompt("Ingrese el segundo número:"));

  // Pedir al usuario que ingrese el operador

  let operator = prompt("Ingrese el operador (+, -, *, /):");

  // variable resultado

  let result;

  // Utilizando Switch para pedir el operador y validarlo.

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      alert(
        "Operador no válido. Por favor ingrese un operador válido (+, -, *, /)."
      );
      continue;
  }
  // Mostrar el resultado en la consola

  console.log("Resultado: " + result);
  let continuar = prompt("Desea seguir operando? (Si/No)");
  if (continuar === "NO" || continuar == "no") {
    break;
  }
}
