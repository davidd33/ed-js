let x, n
x = prompt("Introduce el numero X: ")
x = parseInt(x);

let primos = [] 
let palindromos = []
let ambos = []

for(let i = 1; i < x; i++){
      if (esPrimo(i) && esPalindromo(i)) {
        ambos.push(i);
      } 
      if (esPrimo(i)) {
        primos.push(i);
      }  
      if (esPalindromo(i)) {
        palindromos.push(i);
      }
}
console.log("Primos: " + primos)
console.log("Palíndromos: " + palindromos)
console.log("Ambos: " + ambos)

function esPrimo(numero){
   if (numero <= 1) 
   return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) 
    return false;
  }
  return true;
}

function esPalindromo(x){
        let invertido = 0
        let numero = x
    while (numero > 0) {
        invertido = 10 * invertido + numero % 10
        numero = Math.floor(numero / 10)
    }
        if(x == invertido){
            return true;
        }else{
            return false;
        }
}