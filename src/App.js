import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/FunctionalComponents/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/FunctionalComponents/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ContactoPage from './components/Paginas/Contacto/ContactoPage';
import { CartProvider } from './components/context/CartContext';
import CartContainer from './components/FunctionalComponents/CartContainer/CartContainer';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <div className="App">
        <div>
          <NavBar/>
          <Routes>
            {/*Rutas Estaticas*/}
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/" element={<ItemDetailContainer/>}/>
            <Route path="/productos/" element={<ItemListContainer/>}/>
            <Route path="/contacto" element={<ContactoPage/>} />
            <Route path="/cart" element={<CartContainer/>}/>
            {/*Rutas Dinamicas*/}
            <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/item/:productId" element={<ItemDetailContainer />}/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </CartProvider>  
  );
}

export default App;
