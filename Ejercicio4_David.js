class Autobus {
    constructor(capacidad, pasajeros, matricula, listadoConductores) {
        this.capacidad = capacidad
        this.pasajeros = pasajeros
        this.matricula = matricula
        this.listadoConductores = listadoConductores
    }
    getCapacidad() {
        return this.capacidad
    }
    setCapacidad(capacidad) {
        this.capacidad = capacidad
    }
    getPasajeros() {
        return this.pasajeros
    }
    setPasajeros(pasajeros) {
        this.pasajeros = pasajeros
    }
    getMatricula() {
        return this.matricula
    }
    setMatricula(matricula) {
        this.matricula = matricula
    }
    getlistadoConductores() {
        return this.listadoConductores
    }
    setlistadoConductores(listadoConductores) {
        this.listadoConductores = listadoConductores
    }
    mostrarDatosAutobus() {
        console.log("Capacidad: " + this.capacidad + ", Pasajeros: " + this.pasajeros + ", Matricula: " + this.matricula)
        for(let i = 0; i < this.listadoConductores.length; i++){
            this.listadoConductores[i].mostrarDatosConductor()
        }
    }
    subir(numero) {
        if(this.pasajeros + numero < this.capacidad){
            this.pasajeros += numero
         }else{
            this.pasajeros = this.capacidad
         }
    }
    bajar(numero) {
        if(this.pasajeros <= this.pasajeros){
            this.pasajeros -= numero
        }else{
            this.pasajeros = 0
        }
    }
    buscarConductor(licencia) {
        for (let i = 0; i < this.listadoConductores.length; i++) {
            if (this.listadoConductores[i].getLicencia() === licencia) {
                return true
            }
        }
        return false
        }  
}
class Conductor {
    constructor(nombre, licencia) {
        this.nombre = nombre
        this.licencia = licencia
    }
    getNombre() {
        return this.nombre
    }
    setNombre(nombre) {
        this.nombre = nombre
    }
    getLicencia() {
        return this.licencia
    }
    setLicencia(licencia) {
        this.licencia = licencia
    }
    mostrarDatosConductor() {
        console.log("Conductor: " + this.nombre + ", Licencia: " + this.licencia)
    }  
}

let cond = new Array()
cond[0] = new Conductor("Jorge", "A")
cond[1] = new Conductor("Samuel", "B")
cond[2] = new Conductor("Maria", "A")

let auto =new Autobus(50, 32, "4587GHK", cond)
auto.mostrarDatosAutobus()
auto.subir(3)
console.log("")
auto.mostrarDatosAutobus()
