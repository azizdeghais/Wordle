import "./App.css";
import Board from "./Components/Board";
import Keyboard from "./Components/Keyboard";
import { createContext, useEffect, useState } from "react";
import { boardDefault,generateWordSet } from "./Words";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt]=useState({attempt : 0,letterPos:0})
  const [wordSet,setWordSet]=useState(new Set())

  const correctWord= "RIGHT";
  useEffect( ()=>{
 generateWordSet().then((words)=>{
  setWordSet(words.wordSet)
 })
  },[])

  const onSelectLetter = (keyVal) =>{
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
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
      let currWord="";
      for ( let i =0;i<5;i++){
        currWord += board[currAttempt.attemt][i]
      }
      if ( wordSet.has(currWord)){
        setCurrAttempt({attempt: currAttempt.attempt+1,letterPos:currAttempt.letterPos = 0})

      }
  }
  

  return (
    <div className="App">
      <nav>
        <h1>Worlde</h1>
      </nav>

      <AppContext.Provider value={{ correctWord,board, setBoard,currAttempt, setCurrAttempt,onDelete,onSelectLetter,onEnter }}>
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
