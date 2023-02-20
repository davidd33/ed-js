let cadena = prompt("Introduce una cadena:");

let patrones = ["AA", "BCA", "RTB", "JT"];

console.log("El número total de patrones es: " + totalPatrones(cadena, patrones));


function encontrarPatron(cadena, patron) {
    let cont = 0;
    let i = 0;
    while (i <= cadena.length - patron.length) {
        if (cadena.substring(i, i + patron.length).toUpperCase() === patron.toUpperCase()) {
            cont++;
            i += patron.length - 1;
        }
        i++;
    }
    return cont;
}

function totalPatrones(cadena, ar) {
    let total = 0;
    for (let i = 0; i < ar.length; i++) {
        total += encontrarPatron(cadena, ar[i]);
    }
    return total;
}
