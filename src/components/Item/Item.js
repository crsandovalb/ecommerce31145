import { Link } from "react-router-dom"
import './Item.css'

const Item = ({id, name, img, price}) => {
    return (
        <div className="col">
        <div className="card">
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            
                <p className="Info">
                    Precio: ${price}
                </p>
            
            <Link to={`/detail/${id}`} className="btn btn-dark">Ver detalle</Link>
            </div>
        </div>
        </div>
    )
}

export default Item