//                   VENTA DE PRODUCTOS

const Productos = function (id,nombre,precio){
    this.id = id
    this.nombre = nombre
    this.precio = precio
}

let producto1 = new Productos (1,"Cocacola", 3000)
let producto2 = new Productos (2,"Pepsi", 2500)
let producto3 = new Productos (3,"7up", 2800)
let producto4 = new Productos (4,"Manaos", 2000)
let producto5 = new Productos (5,"Sprite", 2600)
let producto6 = new Productos (6,"Paso de los toros", 2000)

let bebidas = [producto1,producto2,producto3,producto4,producto5,producto6]

for (let i = 0; i < 5; i++ ){
    console.log(bebidas[i])
}

let carrito = []

while (true) {
    let productoId = parseInt(prompt("Ingrese el ID de la bebida que desea comprar: \n CocaCola: ID=1\n Pepsi: ID=2\n 7UP: ID=3\n Manaos: ID=4\n Sprite: ID=5\n Paso De Los Toros: ID=6\n Salir: 0"))
    if (productoId === 0){
        break
    }
}