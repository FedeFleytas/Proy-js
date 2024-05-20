//                   VENTA DE BEBIDAS

const Productos = function (id,nombre,precio,tipo){
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.tipo = tipo
}

let producto1 = new Productos (1,"Cocacola", 3000,"Gaseosa")
let producto2 = new Productos (2,"Pepsi", 2500,"Gaseosa")
let producto3 = new Productos (3,"7up", 2800,"Gaseosa")
let producto4 = new Productos (4,"Manaos", 2000,"Gaseosa")
let producto5 = new Productos (5,"Sprite", 2600,"Gaseosa")
let producto6 = new Productos (6,"Paso de los toros", 2000,"Gaseosa")
let producto7 = new Productos (7,"Villa del Sur Natural", 1500,"Agua")
let producto8 = new Productos (8,"Nestlé Pure Life", 1600,"Agua")
let producto9 = new Productos (9,"Villa Manaos", 2000,"Agua")
let producto10 = new Productos (10,"Cimes", 2200,"Agua")
let producto11 = new Productos (11,"Naranja", 1200,"Jugo")
let producto12 = new Productos (12,"Manzana", 1300,"Jugo")
let producto13 = new Productos (13,"Frutilla", 1400,"Jugo")
let producto14 = new Productos (14,"Multifruta", 1500,"Jugo")
let producto15 = new Productos (15,"Sprite Zero", 2300,"Gaseosa")
let producto16 = new Productos (16,"Seven Up Zero", 2400,"Gaseosa")
let producto17 = new Productos (17,"Pepsi Max", 2500,"Gaseosa")
let producto18 = new Productos (18,"Coca Zero Light", 2600,"Gaseosa")
let producto19 = new Productos (19,"Brahma", 1800,"Cerveza")
let producto20 = new Productos (20,"Corona", 2000,"Cerveza")
let producto21 = new Productos (21,"Quilmes", 2200,"Cerveza")
let producto22 = new Productos (22,"Isenbeck", 2400,"Cerveza")


let bebidas = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10,producto11,producto12,producto13,producto14,producto15,producto16,producto17,producto18,producto19,producto20,producto21,producto22]

let carrito = []

while (true) {
    let tipoDeBebidas = prompt("¿Que tipo de bebida estaba buscando? \nGaseosa\nAgua\nJugo\nCerveza\nFin").toUpperCase().trim()


    
    if (tipoDeBebidas == "FIN") {
        alert("Vuelva pronto.")
        break
    }

    if (!["GASEOSA" , "AGUA" , "JUGO" , "CERVEZA"].includes(tipoDeBebidas)) {
        alert ("Tipo de bebida desconocido. Ingrese nuevamente.")
        continue
    }

    let filtrarProducto = bebidas.filter((producto) => producto.tipo.toUpperCase().includes(tipoDeBebidas))

    console.log ("\nLista de bebidas disponibles: ")

    for (let i = 0; i < filtrarProducto.length; i++) {
        let producto = filtrarProducto [i]
        console.log (`${i + 1}. ${producto.nombre} (${producto.precio})`)
    }
    
    let productoName = prompt("Ingrese el nombre de la bebida que desea comprar").toUpperCase()

    let buscarProducto = filtrarProducto.find(producto => producto.nombre.toUpperCase() === productoName)

    if (!buscarProducto) {
        alert("No existe ese nombre de producto. Vuelve a intentarlo.");
        continue;
    }


    let carritoProd = new Productos(buscarProducto.id, buscarProducto.nombre, buscarProducto.precio)


    carrito.push(carritoProd)


    console.log (`Producto agregado al carrito: ${carritoProd.nombre}`)



}


console.log("\nSus productos en el carrito:");


if (carrito.length === 0) {
    alert ("El carrito esta vacio!")

} else {
    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        console.log(`${i + 1}. ${producto.nombre} (${producto.precio})`);
    }

}

let precioTotal = 0 
for (let producto of carrito) {
    precioTotal += producto.precio
}

alert(`El total de su compra es de: $${precioTotal}`)