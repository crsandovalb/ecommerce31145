import { useState } from 'react'

const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0)
 

    const decrement = () => {
        setCount(count - 1)
    }

    const increment = () => {
        setCount(count + 1)
    }

    return(
        <div class="d-grid gap-2 d-md-block">
            <button class="btn btn-dark" type="button"onClick={increment}>+</button>
            <p>{count}</p>
            <button class="btn btn-dark" type="button"onClick={decrement}>-</button> 
            <button class="btn btn-dark" type="button"onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
} 

export default Counter
