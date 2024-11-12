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
    }

    autosNuevos:function () {
        return this.vehiculos.filter(km => km.car <= 100);
    }

    totalDeVentas:function () {
        const Suma ;
        this.vehiculos.forEach(car=> {
            if (car.vendido = true) {
                Suma = Suma + car.precio;  
            }
        }
    )
    return  Suma;
}
}



module.exports = concesionaria;