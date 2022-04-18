import { useState } from 'react'
import { Link } from "react-router-dom"

const InputCount = ({onConfirm, stock, initial=1}) => {
    const [count, setCount] = useState(initial)
    console.log(stock)
    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onConfirm }) => {
    const initial = 1
    const stock = 50
    
    const [count, setCount] = useState(1)
    

    const decrement = () => {
        if (count > initial) {
        setCount(count -1)
        }
    }

    const increment = () => {
        if (count < stock) {
        setCount(count + 1)
        }

    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}


const ItemDetail = ({ name, img, category, description, price, stock }) => {
    const [typeInput, setTypeInput] = useState(true)
    const [quantity, setQuantity] = useState(0) 

    const handleAdd = (count) => {
        setQuantity(count)
    }

    const Count = typeInput ? ButtonCount : InputCount

    return (
        <div className="col">
        <div className="card">
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Categoria: {category}</p>
            <p className="card-text">Descripcion: {description}</p>
            <p className="card-text">Precio: ${price}</p>

            {quantity > 0 ? <Link to='/cart'>Ir al carrito</Link> : <Count onConfirm={handleAdd} stock={stock}/> }
            </div>
        </div>
        </div>
    )
}


export default ItemDetail