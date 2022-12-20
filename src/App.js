
import './App.css';
import { Router } from './Router/router';
import { ItemList } from './components/itemList/itemList';
import { NavBar } from './components/navbar/navbar';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Router></Router>
    </>
  );
}

export default App;
