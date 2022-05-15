import { useContext, useState } from "react"
import CartContext from '../Context/CartContextProvider'
import CartItem from '../CartItem/CartItem'
import { Link } from "react-router-dom";


const Cart = () => {
    const [loading] = useState(false)

    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)  

   
    if(loading) {
        return <h1>Se esta generando su orden</h1>
    }

    if(getQuantity() === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return (     
        <div>
            <h1>Cart</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${getTotal()}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to="/form"><button className="Button">Generar Orden</button></Link>

        </div>
    )
}

export default Cart