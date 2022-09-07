import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/FunctionalComponents/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/FunctionalComponents/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
      <ItemListContainer greeting={"Bienvenido al ecommerce"} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
