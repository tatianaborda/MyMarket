
import './App.css';
import { NavBar } from './components/NavBar.js'
import { ItemListContainer } from './components/ItemListContainer.js'
import { ItemDetailContainer } from './components/ItemDetailContainer.js'

function App() {
  return (
    <div className="App">
      <div>
      <NavBar/>
      <ItemDetailContainer/>
      <ItemListContainer/>
      </div>
    </div>
  );
}

export default App;
