import './ItemListContainer.css'

const ItemListContainer = (props) => {

    return(
        <>
         <div className='container-fluid'>
            <div className='row'>
                <div className='col d-flex justify-content-center pt-3'>
                     <h1 className="h1_ListContainer">{props.greeting}</h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemListContainer