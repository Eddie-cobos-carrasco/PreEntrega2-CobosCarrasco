import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "img/carrito-img.png";
  
    return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
        <strong> muchimillones </strong>
    </div>
  )
}

export default CartWidget