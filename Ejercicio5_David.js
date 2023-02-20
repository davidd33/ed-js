class Carta {
  constructor(numero, palo) {
    this.numero = numero;
    this.palo = palo;
  }

 
  get numero() {
    return this.numero;
  }

  set numero(numero) {
    this.numero = numero;
  }

  get palo() {
    return this.palo;
  }

  set palo(palo) {
    this.palo = palo;
  }

  mostrarCarta() {
    return this.numero + " de " + this.palo;
  }

  esMenorQue(carta) {
    if (this.palo === carta.palo) {
      return this.numero < carta.numero;
    } else {
      let palosOrdenados = ["Oros", "Copas", "Espadas", "Bastos"];
      let miPosicion = palosOrdenados.indexOf(this.palo);
      let suPosicion = palosOrdenados.indexOf(carta.palo);
      return miPosicion < suPosicion;
    }
  }
}

class Baraja {
  constructor() {
    this.cartas = [];
    let palos = ["Oros", "Copas", "Espadas", "Bastos"];
    for (let i = 0; i < palos.length; i++) {
      for (let j = 1; j <= 12; j++) {
        this.cartas.push(new Carta(j, palos[i]));
      }
    }
  }

  get cartas() {
    return this.cartas;
  }

  set cartas(cartas) {
    this.cartas = cartas;
  }

  mostrarBaraja() {
    return ("Carta: " + carta.mostrarCarta()).join("\n");
  }

  barajar(veces = 20) {
    for (let i = 0; i < veces; i++) {
      let pos1 = Math.floor(Math.random() * this.cartas.length);
      let pos2 = Math.floor(Math.random() * this.cartas.length);
      let temp = this._cartas[pos1];
      this.cartas[pos1] = this.cartas[pos2];
      this.cartas[pos2] = temp;
    }
  }

  jugar() {
    let ganadasUsuario = 0;
    let ganadasMaquina = 0;
    let seguirJugando = true;

    while (seguirJugando) {
      let cartaAleatoria = this.cartas[Math.floor(Math.random() * this.cartas.length)];
      let numCartaUsuario = prompt("Introduce un número de carta entre 1 y 48: ");
      let cartaUsuario = this.cartas[numCartaUsuario - 1];

      if (cartaUsuario && cartaAleatoria.esMenorQue(cartaUsuario)) {
        ganadasUsuario++;
        alert("Has ganado! La carta aleatoria era " + cartaAleatoria.mostrarCarta());
      } else {
        ganadasMaquina++;
        alert("Lo siento, has perdido. La carta aleatoria era " + cartaAleatoria.mostrarCarta());
      }

      let respuesta = prompt("Marcador: Usuario " + ganadasUsuario + " - " + ganadasMaquina + " Máquina. ¿Quieres seguir jugando? (s/n)");

      seguirJugando = respuesta && respuesta.toLowerCase() === "s";
    }
  }
}

let miBaraja = new Baraja();
miBaraja.mostrarBaraja();
miBaraja.barajar();
miBaraja.mostrarBaraja();
miBaraja.jugar();
