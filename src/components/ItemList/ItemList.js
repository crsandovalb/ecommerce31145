import Item from '../Item/Item'

const ItemList = ({products}) => {

    return(
        <div className='row row-cols-1 row-cols-md-3 g-2 mt-2'>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>    
    )
}

export default ItemList