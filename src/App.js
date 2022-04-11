import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


const App = () => {

  return (
    <>
      <div className="App">
        <BrowserRouter>
        <NavBar />
        <div className="container">
        <Routes>
          <Route path='/list' element={<ItemListContainer />} />
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>Error 404 Pokemon no encontrado</h1>} />
        </Routes>
        </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
