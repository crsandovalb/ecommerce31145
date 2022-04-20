import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../Context/CartContextProvider';


const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return(
        <div>
            <img src="/images/cart.png" alt='cart' className='CartImg'/>
            { getQuantity() }
        </div>
    );
}

export default CartWidget