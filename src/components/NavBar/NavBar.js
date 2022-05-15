import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection } from 'firebase/firestore'

const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {

  getDocs(collection(firestoreDb, 'categories')).then(response => {
    const categories = response.docs.map(doc =>{
      return { id: doc.id, ...doc.data()}
    })
    setCategories(categories)
  })

  }, [])

  return (
      <nav className="NavBar" >
        <Link to='/'>
            <h3>
              <span>POKEcommerce</span>
            </h3>
        </Link>
        <div className="Categories">
          { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
            className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}
          >{cat.description}</NavLink>)}
          <CartWidget />
        </div>
        
      </nav>
  )
}

export default NavBar