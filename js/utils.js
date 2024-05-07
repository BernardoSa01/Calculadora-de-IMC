// Validando dados de entrada
export function notANumber(value) {
  return isNaN(value) || value == ""
}

// Calculando o IMC
export function calculateIMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

