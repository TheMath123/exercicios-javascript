/** QUESTÃO:
 Uma equipe da Fórmula 1 deseja calcular o número mínimo de litros que deverá colocar no tanque de um de seus carros para que ele possa percorrer um determinado número de voltas até o primeiro reabastecimento. Escreva um programa (EM QUALQUER LINGUAGEM) que leia o comprimento da pista (em metros), o número total de voltas a serem percorridas no grande prêmio, o número de reabastecimentos desejados e o consumo de combustível do carro (em Km/L). Calcular e escrever o número mínimo de litros necessários para percorrer até o primeiro reabastecimento. Considere que o número de voltas entre os reabastecimentos é o mesmo.
 */

var runwayLength // Comprimento da pista (em metros)
var numberOfLaps // Número total de voltas
var numberOfSupplies // Número de reabastecimentos desejados
var consumption // Consumo de comb. do carro (em Km/l)

function calculateConsumption() {
  let totalRaceDistanceMt = runwayLength * numberOfLaps //Calcula a distancia total da corrida em metros
  let totalRaceDistanceKm = totalRaceDistanceMt / 1000 //Converte em quilômetros
  let distanceBetweenSupplies = totalRaceDistanceKm / numberOfSupplies //Distancia entre abastecimentos
  return distanceBetweenSupplies / consumption //Consumo em litros
}

function questions() {
  console.log('Qual o comprimento da pista (em metros)?')
  runwayLength = prompt()

  console.log('Qual o número total de voltas?')
  numberOfLaps = prompt()

  console.log('Qual a quantidade de reabastecimentos desejados?')
  numberOfSupplies = prompt()

  console.log('Qual o consumo de combustível do carro (em Km/l)?')
  consumption = prompt()
}

questions()
let consumptionNextSupply = calculateConsumption()
console.log(`Litros necessários para percorrer até o primeiro reabastecimento é de ${consumptionNextSupply.toFixed(3)} litros.`)