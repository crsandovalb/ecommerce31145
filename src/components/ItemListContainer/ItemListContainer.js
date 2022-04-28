import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query , where } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
    //    getProducts(categoryId).then(prods => {
         //   setProducts(prods)
      //  }).catch(error => {
          //  console.log(error)
        //})

        const collectionRef = categoryId
        ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
        : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response => {
            console.log(response)
            const products = response.docs.map(doc =>{
                return { id: doc.id, ...doc.data()}
            })
            setProducts(products)
        })
    }, [categoryId])

    return(
        <div className="Container d-flex">
        <div className="row">
        <div className="col">
        <ItemList products={products} />
        </div>
        </div>
        </div>
    )
}

export default ItemListContainer