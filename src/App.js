import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/FunctionalComponents/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/FunctionalComponents/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ContactoPage from './components/Paginas/Contacto/ContactoPage';


function App() {
  return (
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
          {/*Rutas Dinamicas*/}
          <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:productId" element={<ItemDetailContainer />}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
