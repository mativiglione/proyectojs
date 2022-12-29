let productos = [
  {
    categoria: "Deportes",
    foto: "fifa23",
    nombre: "FIFA 23",
    precio: 15000,
    producto: 1,
  },
  {
    categoria: "Deportes",
    foto: "fm23",
    nombre: "FOOTBALL MANAGER 23",
    precio: 8000,
    producto: 2,
  },
  {
    categoria: "Deportes",
    foto: "nba23",
    nombre: "NBA 2K23",
    precio: 12000,
    producto: 3,
  },
];

let listaProductos = document.querySelector(".contenedor-productos");

for (let a of productos) {
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `
<div class=" contenedor-producto col-lg-12">
  <span class="badge bg-primary mt-2 mb-4">${a.categoria}</span>
<div class="d-flex justify-content-center"><img src="imagenes/${a.foto}.jpg" alt="" class="img-fluid"></img></div>
<div class="contenedor-producto card-body">
  <h5 class="card-title mt-3">${a.nombre}</h5>
  <h6 class="mb-3">${a.precio}</h6>
  <button type="button" class="btn btn-primary boton-compra${a.producto}">COMPRAR</button>
</div>
  </div>`;

  listaProductos.appendChild(contenedor);
}

let dinero = 12000;

let tudinero = document.querySelector(".fondos");
let fondos = document.createElement("p");
fondos.innerHTML = dinero;

tudinero.appendChild(fondos);

const btnCompra1 = document.querySelector(".boton-compra1");

btnCompra1.onclick = () => {
  let totalAPagar = 15000;
  if (dinero >= totalAPagar) {
    let nuevaCompra = document.querySelector("main"); 
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
  <div class="alert alert-dismissible alert-success">
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  <strong>Producto comprado</strong> Ya podes descargarlo desde tu biblioteca de juegos<a href="#" class="alert-link"></a>.
</div>`;

    nuevaCompra.appendChild(contenedor);
  } else {
    let nuevaCompra = document.querySelector("main");
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
    <div class="alert alert-dismissible alert-danger">
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    <strong>No tenes fondos suficientes :(</strong> <a href="#" class="alert-link">Intenta con otro medio de pago.</a>
  </div>`;

    nuevaCompra.appendChild(contenedor);
  }
};

const btnCompra2 = document.querySelector(".boton-compra2");

btnCompra2.onclick = () => {
  let totalAPagar = 8000;
  if (dinero >= totalAPagar) {
    let nuevaCompra = document.querySelector("main");
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
        <div class="alert alert-dismissible alert-success">
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  <strong>Producto comprado</strong> Ya podes descargarlo desde tu biblioteca de juegos<a href="#" class="alert-link"></a>.
</div>`;

    nuevaCompra.appendChild(contenedor);
  } else {
    let nuevaCompra = document.querySelector("main");
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
    <div class="alert alert-dismissible alert-danger">
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    <strong>No tenes fondos suficientes :(</strong> <a href="#" class="alert-link">Intenta con otro medio de pago.</a>
  </div>`;

    nuevaCompra.appendChild(contenedor);
  }
};

const btnCompra3 = document.querySelector(".boton-compra3");

btnCompra3.onclick = () => {
  let totalAPagar = 12000;
  if (dinero >= totalAPagar) {
    let nuevaCompra = document.querySelector("main");
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
        <div class="alert alert-dismissible alert-success">
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  <strong>Producto comprado</strong> Ya podes descargarlo desde tu biblioteca de juegos<a href="#" class="alert-link"></a>.
</div>`;

    nuevaCompra.appendChild(contenedor);
  } else {
    let nuevaCompra = document.querySelector("main");
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
    <div class="alert alert-dismissible alert-danger">
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    <strong>No tenes fondos suficientes :(</strong> <a href="#" class="alert-link">Intenta con otro medio de pago.</a>
  </div>`;

    nuevaCompra.appendChild(contenedor);
  }
};
