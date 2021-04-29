class Producto {
  constructor(articulo, precio, stock, imagenP) {
    this.articulo = articulo;
    this.precio = parseInt(precio);
    this.stock = parseInt(stock);
    this.imagen = imagenP;
  }

  restaStock() {
    this.stock -= 1;
  }

  agregarAlCarrito() {
    productoAgregado = [this.articulo, this.precio];
    carrito.push(productoAgregado);
    this.restaStock();
  }
}

ariticulos = [];

let productoAgregado = [];

carrito = [];

let listaArticulos = document.getElementById("listadoArticulos");

//hardcodeando productos
const producto1 = new Producto(
  "articulo1",
  250,
  50,
  "https://i.postimg.cc/mZKmWdfS/Ezig-A0x-Xo-AEs-Jq-G.jpg"
);
const producto2 = new Producto(
  "articulo2",
  150,
  10,
  "https://i.postimg.cc/mZKmWdfS/Ezig-A0x-Xo-AEs-Jq-G.jpg"
);
const producto3 = new Producto(
  "articulo3",
  350,
  20,
  "https://i.postimg.cc/mZKmWdfS/Ezig-A0x-Xo-AEs-Jq-G.jpg"
);
const producto4 = new Producto(
  "articulo4",
  350,
  20,
  "https://i.postimg.cc/mZKmWdfS/Ezig-A0x-Xo-AEs-Jq-G.jpg"
);
const producto5 = new Producto(
  "articulo5",
  350,
  20,
  "https://i.postimg.cc/mZKmWdfS/Ezig-A0x-Xo-AEs-Jq-G.jpg"
);
const producto6 = new Producto(
  "articulo6",
  350,
  20,
  "https://i.postimg.cc/mZKmWdfS/Ezig-A0x-Xo-AEs-Jq-G.jpg"
);
const producto7 = new Producto(
  "articulo7",
  350,
  20,
  "https://i.postimg.cc/mZKmWdfS/Ezig-A0x-Xo-AEs-Jq-G.jpg"
);

ariticulos.push(
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7
);

//creamos la base en localstorage
localStorage.setItem("articulosDB", JSON.stringify(ariticulos));

//recuperamos la base del localstorage
let articulosDB = JSON.parse(localStorage.getItem("articulosDB"));

console.log(ariticulos);

for (let i = 0; i < articulosDB.length; i++) {
  let itemProducto = document.createElement("li");
  let tituloProducto = document.createElement("h1");
  let precioProducto = document.createElement("h3");
  let stockProducto = document.createElement("p");
  let imagenProducto = document.createElement("img");
  let buttonProducto = document.createElement("button");
  //
  tituloProducto.textContent = `${articulosDB[i].articulo}`;
  precioProducto.textContent = `Precio $ ${articulosDB[i].precio}`;
  stockProducto.textContent = `Stock: ${articulosDB[i].stock}`;
  buttonProducto.textContent = `Agregar al Carrito`;
  imagenProducto.src = `${articulosDB[i].imagen}`;
  //
  listaArticulos.appendChild(itemProducto);
  itemProducto.appendChild(imagenProducto);
  itemProducto.appendChild(tituloProducto);
  itemProducto.appendChild(precioProducto);
  itemProducto.appendChild(stockProducto);
  itemProducto.appendChild(buttonProducto);
  itemProducto.className = "item";
  itemProducto.id = "itemId";
}
