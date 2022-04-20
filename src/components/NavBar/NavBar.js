import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories } from '../../asyncmock'

const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then(categories => {
      setCategories(categories)
    })
  }, [])

  return (
      <nav className="NavBar" >
        <Link to='/'>
            <h3>POKEcommerce</h3>
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