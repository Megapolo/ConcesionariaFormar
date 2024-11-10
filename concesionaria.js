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
    }

}

module.exports = concesionaria;