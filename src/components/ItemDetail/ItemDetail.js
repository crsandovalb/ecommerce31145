import './ItemDetail.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Counter from '../Counter/Counter'
import CartContext from '../Context/CartContextProvider'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const { addItem, isInCart } = useContext(CartContext)

    const handleAdd = (count) => {
        const productObj = {
            id, name,price, quantity: count
        }

        addItem(productObj)
    }

    return (
        <div className="col">
        <div className="card">
            <img src={img} className="card-img-top " alt={name} />
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Categoria: {category}</p>
            <p className="card-text">Descripcion: {description}</p>
            <p className="card-text">Precio: ${price}</p>
		{ isInCart(id) ? <Link to='/cart'>Ir al carrito</Link> : <Counter onAdd={handleAdd} stock={stock}/> }
            </div>
        </div>
        </div>

    )
}

export default ItemDetail