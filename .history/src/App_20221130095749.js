import './App.css';
import Board from './Components/Board';
import Keyboard from './Components/Keyboard';
import {createContex,useState } from 'react'
export const AppContext = createContext()
import {boardDefault} from  "./Words"

function App() {
  const [board,setBoard]=useState(boardDefault);

  return (
    <div className="App">
     <nav><h1>Worlde</h1></nav>
     <AppContext.Provider value={{board,setBoard}}>
     <Board></Board>
     <Keyboard></Keyboard>
     </AppContext.Provider>
    </div>
  );
}

export default App;
