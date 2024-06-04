let iconoCart = document.querySelector('.carrito')
let cerrar = document.querySelector('.cerrar')
let body = document.querySelector('body')
let listaProductHTML = document.querySelector('.proc-conte')
let listCartHTML = document.querySelector('.listCart')
let iconoCartSpan = document.querySelector('.carritocontainer p')
let totally = document.querySelector('.totally')



const listaProdctos = [
    {
        "id": 1,
        "name": "Procesador AMD Ryzen 3 3200g",
        "price": 167821,
        "image": "images/procesadores/amd-ryzen-3-3200g.png"
    },

    {
        "id": 2,
        "name": "GeForce RTX 4060 Ti 8Gb Msi Ventus 3X Oc",
        "price": 760569,
        "image": "images/placasdevideo/GeForce-RTX-4060-Ti-8Gb-Msi-Ventus-3X-Oc.png"
    },

    {
        "id": 3,
        "name": "Asrock AMD Radeon RX 550 2gb",
        "price": 157395,
        "image": "images/placasdevideo/asrock-radeon-rx-550-2gb.png"
    },

    {
        "id": 4,
        "name": "Procesador Intel Core i7 13700f",
        "price": 749000,
        "image": "images/procesadores/intel-core-i7-13700f.png"
    },

    {
        "id": 5,
        "name": "Procesador intel core i9 14900k",
        "price": 1848500,
        "image": "images/procesadores/intel_core_i9_14900k.png"
    },

    {
        "id": 6,
        "name": "PNY Geforce RTX 4070 12gb",
        "price": 1658586,
        "image": "images/placasdevideo/pny-geforce-rtx-4070-12gb.png"
    }
]

let listProduct = []

let carrito = []


iconoCart.addEventListener('click', () => {
    body.classList.toggle('mostrarcarrito')
})

cerrar.addEventListener('click', () => {
    body.classList.toggle('mostrarcarrito')
})


const AgregarHTML = () => {
    listaProductHTML.innerHTML = '';
    if (listaProdctos.length > 0) {
        listaProdctos.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('prode');
        newProduct.dataset.id = product.id;
        newProduct.innerHTML = `
        <img src="${product.image}" alt="Imagen de la caja del producto" class="fotoo">
        <div class="prod-txt">
            <h2 class="prod-name">${product.name}</h2>
            <p class="precc"><span>${parseFloat(product.price).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</span></p>
        </div>
        <button type="button" class="press" id="anadir"> Añadir al carrito </button>
        `;

        listaProductHTML.appendChild(newProduct);
    });
    }
};
AgregarHTML()


listaProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target 
    if (positionClick.classList.contains('press')){
        let idproduct = positionClick.parentElement.dataset.id
        addCart(idproduct)
    }
})



const finalizar = document.getElementById('btnFin')

finalizar.addEventListener('click', () => {
    carrito = []
    AgregarcarritoHTML()
    addCartMemory()
    sweetAlert()
    body.classList.toggle('mostrarcarrito')
})

const sweetAlert = () => {
    Swal.fire({
        title: '¡Compra realizada con exito!',
        text: '¡Vuelva pronto!',
        icon: 'success',
        confirmButtonText: 'Salir'
    })
}

finalizar.addEventListener('click', sweetAlert)


const addCart = (idproduct) => {
    let positionProductCart = carrito.findIndex((value) => value.idproduct === idproduct)
    if(carrito.length <= 0) {
        carrito = [{
            idproduct: idproduct,
            quantity: 1
        }]
    }else if (positionProductCart < 0) {
        carrito.push({
            idproduct: idproduct,
            quantity: 1
        })
    }else {
        carrito[positionProductCart].quantity = carrito[positionProductCart].quantity + 1
    }

    const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: "Agregado con exito"
    });

    AgregarcarritoHTML()
    addCartMemory ()

}
const addCartMemory = () => {
    localStorage.setItem ('carrito', JSON.stringify(carrito))
}


const AgregarcarritoHTML = () => {
    listCartHTML.innerHTML = ''
    let totalQuantity = 0
    let totalPrice = 0
    if(carrito.length > 0) {
        carrito.forEach(carrito => {
            totalQuantity = totalQuantity + carrito.quantity
            let newCarrrito = document.createElement('div')
            newCarrrito.classList.add('item')
            newCarrrito.dataset.id = carrito.idproduct
            let positionProdcto = listaProdctos.findIndex((value) => value.id == carrito.idproduct)
            let info = listaProdctos[positionProdcto]
            totalPrice += carrito.quantity * info.price
            newCarrrito.innerHTML = `
            <div class="images">
                <img src="${info.image}" alt="">
            </div>
            <div class="name">
                <p>${info.name}</p>
            </div>
            <div class="totalPrecio">
                <p>$${info.price * carrito.quantity}</p>
            </div>
            <div class="cantidades">
                <span class="menos"><</span>
                <span class="cant">${carrito.quantity}</span>
                <span class="mas">></span>
            </div>
            ` 
            listCartHTML.appendChild(newCarrrito)
        })
    }
    iconoCartSpan.innerHTML = totalQuantity
    totally.innerHTML = `$${totalPrice.toFixed(2)}`
    
}



listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target
    if (positionClick.classList.contains('menos') || (positionClick.classList.contains('mas'))) {
        let product_id = positionClick.parentElement.parentElement.dataset.id
        let type = 'menos'
        if (positionClick.classList.contains('mas')) {
            type = 'mas'
        }
        changeQuantity (product_id, type)
    }
})

const changeQuantity = (product_id, type) => {
    let positionItemCart = carrito.findIndex((value) => value.idproduct == product_id)
    if (positionItemCart >= 0) {
        switch (type) {
            case 'mas':
                carrito [positionItemCart].quantity ++;
                break;

            default:
                let valueChange = carrito[positionItemCart]. quantity - 1;
                if (valueChange > 0) {
                    carrito [positionItemCart].quantity = valueChange
                }else {
                    carrito.splice(positionItemCart, 1)
                }
                break;
        }
    }
    addCartMemory()
    AgregarcarritoHTML()
}



const initLS = () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        AgregarcarritoHTML()
    }
}

initLS()