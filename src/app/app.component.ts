import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  
  title = 'PruebaDesarrollo';
   
  }
  
class Alcancia {
  monedas: any =  { 
     50: "", 
     100: "",
     200: "",
     500: "", 
     1000: "", 
  };

  constructor() {
    
  }
  
  agregarMonedaAlcancia(denominacion:number) {
    if (this.monedas.hasOwnProperty(denominacion)) {
      this.monedas[denominacion]++;
    } 
  }

  cantidadMonedasAlcancia() {
    return Object.values(this.monedas).reduce((total, cantidad) => Number(total)+ Number(cantidad), 0);
  }

  cantidadDineroAlcancia() {
    let totalDinero = 0;
    for (const denominacion in this.monedas) {
      totalDinero += Number(denominacion) * this.monedas[denominacion];
    }
    return totalDinero;
    
  }
 

  cantidadMonedasPorDenominacionAlcancia(denominacion:number) {
    if (this.monedas.hasOwnProperty(denominacion)) {
      return this.monedas[denominacion];
    
    }
  }

  cantidadDineroPorDenominacionAlcancia(denominacion:number) {
    if (this.monedas.hasOwnProperty(denominacion)) {
      return denominacion * this.monedas[denominacion];
    } 
      return 0;
  }

}

const alcancia = new Alcancia();

alcancia.agregarMonedaAlcancia(50);
alcancia.agregarMonedaAlcancia(100);
alcancia.agregarMonedaAlcancia(200);
alcancia.agregarMonedaAlcancia(500);
alcancia.agregarMonedaAlcancia(1000);

console.log("Cantidad de monedas en la alcancia: "+ alcancia.cantidadMonedasAlcancia());
console.log("Cantidad de dinero dentro de la alcancia: "+ alcancia.cantidadDineroAlcancia());
console.log("Cantidad de monedas de 50 en la alcancia: "+ alcancia.cantidadMonedasPorDenominacionAlcancia(50));
console.log("Cantidad de monedas de 100 en la alcancia: "+ alcancia.cantidadMonedasPorDenominacionAlcancia(100));
console.log("Cantidad de monedas de 200 en la alcancia: "+ alcancia.cantidadMonedasPorDenominacionAlcancia(200));
console.log("Cantidad de monedas de 500 en la alcancia: "+ alcancia.cantidadMonedasPorDenominacionAlcancia(500));
console.log("Cantidad de monedas de 1000 en la alcancia: "+ alcancia.cantidadMonedasPorDenominacionAlcancia(1000));

