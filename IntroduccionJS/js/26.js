// this

const reservacion = {
    nombre: 'jose',
    apellido: 'santiago',
    total: 5000,
    pagado: false,
    informacion: function(){//se tiene que usar la palabra reservada function para que funciones el this, de lo contrario dara undefined
        console.log(`El cliente ${this.nombre} reservo y su cantiadad a pagar es de ${this.total}`);
    }
}

console.log(reservacion.informacion());