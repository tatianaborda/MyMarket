
import './App.css';
import { NavBar } from './components/NavBar.js'
import { ItemListContainer } from './components/ItemListContainer.js'

function App() {
  return (
    <div className="App">
      <div>
      <NavBar/>
      <ItemListContainer/>
      </div>
    </div>
  );
}

export default App;
