const productos = [
    { nombre: "Amongus red", precio: 4 + "€", id: "1", img: "../img/amongus-red.png", idCat: "2" },
    { nombre: "Amongus blue", precio: 2 + "€", id: "2", img: "../img/amongus-blue.png", idCat: "2" },
    { nombre: "Amongus yellow", precio: 6 + "€", id: "3", img: "../img/amongus-yellow.jpg", idCat: "3" },
    { nombre: "Amongus green", precio: 9 + "€", id: "4", img: "../img/amongus-green.webp", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}