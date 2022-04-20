import { useState, useEffect } from "react"
import { getProducts } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect (() => {
        getProducts(categoryId).then( prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])



    return(
        <div className="Container">
        <div>
        <h1>{props.greeting}</h1>
        <ItemList products={products} />
        </div>
        </div>
    )
}

export default ItemListContainer