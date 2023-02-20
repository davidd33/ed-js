let numeros = [];
let introducir;

do {
  introducir = prompt("Introduce un número positivo (0 o menos para terminar): ");
  if(introducir > 0)
  numeros.push(parseInt(introducir));
}while (introducir >= 1);

let pares = 0;
let impares = 0;
let suma = 0;
let mayor = numeros[0];
let menor = numeros[0];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0){
    pares++;
  }else{
    impares++;
  } 
  
  suma += numeros[i];
  
  if (numeros[i] > mayor){
      mayor = numeros[i];
  } 
  if (numeros[i] < menor){
      menor = numeros[i];
  }
}

let media = suma / numeros.length;

alert("Números: " + numeros.join(", ") + "\n" +
      "Pares: " + pares + "\n" +
      "Impares: " + impares + "\n" +
      "Suma: " + suma + "\n" +
      "Media: " + media + "\n" +
      "Mayor: " + mayor + "\n" +
      "Menor: " + menor);