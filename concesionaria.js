const autos = require('./autos.js');
const concesionaria = {
    vehiculos:autos,
    autosEnventa: function () {
        return this.vehiculos.filter(car => car.vendido === false)
    },
    vender:function (dominio) {
        this.vehiculos.forEach(car => {
            if(car.patente == dominio){
                car.vendido = true
            }
        })
    },
    autoFinanciable:function (cuotas) {
        const enVenta = this.autosEnventa();
        return enVenta.filter(car => car.cuotas >= cuotas);
    },
    listaDeVentas:function () {
        return this.vehiculos.filter(element => element.vendido === true)
    },
    autosQuePuedeComprar:function (dinero) {
        return this.vehiculos.filter(car => car.precio <= dinero);
    },
    autosNuevos:function () {
        return this.vehiculos.filter(km => km.km <= 100);
    },
    totalDeVentas:function () {
        let suma = 0 ;
        this.vehiculos.forEach(car=> {
            if (car.vendido === true) {
                suma = suma + car.precio;  
            }
        }
        )
    return  suma;
    }

}

module.exports = concesionaria;