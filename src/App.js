import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from '../src/components/Context/CartContextProvider';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
      <div className="App">
          <CartContextProvider>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path='*' element={<h1>Error 404 Pokemon no encontrado</h1>}/>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
              </Routes>
            </BrowserRouter> 
          </CartContextProvider>
      </div>
  );
}

export default App;