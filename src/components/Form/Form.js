import CartContext from "../Context/CartContextProvider"
import Swal from 'sweetalert2'
import Cart from "../Cart/Cart"
import { useContext, useState } from "react"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'
import { NavLink } from "react-router-dom"
import './Form.css'




const Form = () => {

  const [input, setInput] = useState({name: '', phone: '', address: '', mail: '', mailConfirm: '' })
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const { cart, getTotal } = useContext(CartContext)

  const handleSubmit = (e) => {
      e.preventDefault()
  }

  const onBlurHandler = (event) =>  {
      if (input.mail === input.mailConfirm) {
          setButtonDisabled(false)
      } else {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Mail incorrecto!',
              footer: 'Chequea tus datos por favor'
          })
      }
  }

  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInput(values => ({ ...values, [name]: value }))
  }

  const createOrder = () => {
      setLoading(true)
  
      const objOrder = {
          prodOrder: cart.map(prod => { return ({ id: prod.id, name: prod.name, quantity: prod.quantity, priceUni: prod.price }) }),
          buyer: {...input},
          total: getTotal(),
          date: new Date()
      }

      const ids = cart.map(prod => prod.id)

      const batch = writeBatch(firestoreDb)

      const collectionRef = collection(firestoreDb, 'products')

      const outOfStock = []

      getDocs(query(collectionRef, where(documentId(), 'in', ids)))
          .then(response => {
              response.docs.forEach(doc => {
                  const dataDoc = doc.data()
                  const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                  if (dataDoc.stock >= prodQuantity) {
                      batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                  } else {
                      outOfStock.push({ id: doc.id, ...dataDoc })
                  }
              })
          }).then(() => {
              if (outOfStock.length === 0) {
                  const collectionRef = collection(firestoreDb, 'orders')
                  return addDoc(collectionRef, objOrder)
              } else {
                  return Promise.reject({ name: 'outOfStockError', products: outOfStock })
              }
          }).then(({ id }) => {
              batch.commit()
              const orderId = id
              console.log(`El id de la orden es ${id}`)
              return setOrderId(orderId)
          }).catch(error => {
              console.log(error)
          }).finally(() => {
              setLoading(false)
          })
  }

  if (orderId) {
      return (
          <>  
              <h2 className="buyTitle">Gracias por tu compra {input.name}!</h2>
              <h3 className="code">Tu código de seguimiento es {orderId}</h3>
              <div className="processingBuy">
                  <NavLink to="/" className="finish">Volver al inicio</NavLink>
              </div>
          </>
      )
  }

  if (loading) {
      return <h1 className="processingBuy">Procesando compra</h1>
      
  }

  if (cart.length === 0) {
      return < Cart />
  }

  return (
      <>
      <div className="containerForm">
          <div className="neonContainer">
              <form onSubmit={handleSubmit}>
                  <h2 className='title'>Completa tus datos</h2>
                  <div className='form'>
                      <div className='field'>
                          <div className='inputs'>
                              <label><input required className='greenOk' placeholder="Nombre y apellido" type='text' onChange={handleChange} name="name" value={input.name || ""} /></label>
                              <label><input required className={(input.mailConfirm === input.mail) ? 'greenOk' : 'redWrong'} placeholder="Email" type='text' onChange={handleChange} name="mail" value={input.mail || ""} /></label>
                              <label><input required className={(input.mailConfirm === input.mail) ? 'greenOk' : 'redWrong'} placeholder="Nuevamente tu Email" type='text' onChange={handleChange} onBlur={onBlurHandler} name="mailConfirm" value={input.mailConfirm || ""} /></label>
                              <label><input required className='greenOk' placeholder="Dirección de envío" type='text' onChange={handleChange} name="address" value={input.address || ""} /></label>
                              <label><input required className='greenOk' placeholder="Teléfono" type="text" onChange={handleChange} name="phone" value={input.phone || ""} /></label>
                              <div>
                                  <button type="submit" onClick={() => createOrder()} className="finish" disabled={buttonDisabled}>Finalizar compra</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </form>
          </div>
      </div>
          
      </>

  )
}

export default Form