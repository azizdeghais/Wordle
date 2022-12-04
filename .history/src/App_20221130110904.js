import "./App.css";
import Board from "./Components/Board";
import Keyboard from "./Components/Keyboard";
import { createContext, useState } from "react";
import { boardDefault } from "./Words";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt]=useState({attempt : 0,letterPos:0})

  const onSelectLetter = () =>{

  }

  const onDelete = () =>{
    if ( currAttempt.letterPos===0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos-1] = '';
    setBoard(newBoard)
    setCurrAttempt({...currAttempt,letterPos:currAttempt.letterPos -1})

  }

  const onEnter = () =>{
      if ( currAttempt.letterPos!==5) return;
     setCurrAttempt({attempt: currAttempt.attempt+1,letterPos:currAttempt.letterPos = 0})
  }
  

  return (
    <div className="App">
      <nav>
        <h1>Worlde</h1>
      </nav>

      <AppContext.Provider value={{ board, setBoard,currAttempt, setCurrAttempt }}>
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
