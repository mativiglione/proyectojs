let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

alert("Bienvenido" + " " + nombre + " " + apellido);


function producto(nombre, precio) {
  this.nombre = console.log(nombre.toUpperCase());
  this.precio = precio;
  this.sumaIva = function () {
    console.log((this.precio = this.precio * 1.21));
  };
}

const productos = [];
productos.push(new producto("FIFA 23", "15000"));
productos.push(new producto("F1 22", "12000"));
productos.push(new producto("Football Manager ", "9000"));

for (const producto of productos) {
  producto.sumaIva();
}

let dinero = 15000;

alert("El total de tu dinero es" + " " + dinero);

let juego = prompt(`¿Que videojuego te gustaria comprar?:
1: FIFA 23
2: F1 22
3: Football Manager 23
`);

switch (juego) {
  case "1":
    alert("Elegiste FIFA 23. Su costo es de $15000 + Iva.");
    let totalApagar = 18150;
    if (dinero > totalApagar) {
      alert("Tenes suficiente dinero para hacer la compra");
    } else {
      alert("Fondos insuficientes");
    }
    break;
  case "2":
    alert("Elegiste F1 22. Su costo es de $12000 + Iva.");
    let totalApagar2 = 14520;
    if (dinero > totalApagar2) {
      alert("Tenes suficiente dinero para hacer la compra");
    } else {
      alert("Fondos insuficientes");
    }
    break;
  case "3":
    alert("Elegiste Football Manager 23. Su costo es de $9000 + Iva.");
    let totalApagar3 = 10890;
    if (dinero > totalApagar3) {
      alert("Tenes suficiente dinero para hacer la compra");
    } else {
      alert("Fondos insuficientes");
    }
    break;
  default:
    alert("No elegiste ninguna de las opciones anteriores.");
    break;
}


