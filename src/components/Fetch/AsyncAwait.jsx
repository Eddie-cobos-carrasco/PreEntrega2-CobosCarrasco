import { useState, useEffect } from "react";


const misProductos = [
    { nombre: "sussy", precio: 1 },
    { nombre: "baka", precio: 5 },
    { nombre: "imposter", precio: 2 }
];


const getMisProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000)
    })
}


const AsyncAwait = () => {
    const [misProductos, setMisProductos] = useState([]);

    useEffect( ()=> {

        console.log(getMisProductos());
    

        const pedirDatos = async () => {
            const inventarioProductos = await getMisProductos();
            setMisProductos(inventarioProductos);
        }

        pedirDatos();

    }, [])
    return (
        <div>
            <h2>Mis productos usando Async Await</h2>
            {
                misProductos.map((producto,index) => {
                    return (
                        <div key={index}>
                            <p> {producto.nombre} </p>
                            <p> {producto.precio} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AsyncAwait