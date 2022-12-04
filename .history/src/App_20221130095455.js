import './App.css';
import Board from './Components/Board';
import Keyboard from './Components/Keyboard';
import {createContext } from 'react'

function App() {
  const [board,setBoard]=useState(boardDefault);

  return (
    <div className="App">
     <nav><h1>Worlde</h1></nav>
     <Board></Board>
     <Keyboard></Keyboard>
    </div>
  );
}

export default App;
