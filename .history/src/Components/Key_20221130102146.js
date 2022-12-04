import React,{useContext} from 'react'
import { AppContext} from '../App'


function Key({keyVal,bigKey}) {
    const {board, setBoard,currAttempt,setCurrAttempt}=useContext(AppContext);

    const selectLetter  = ()=>{
        const newBoard = [...board]
        newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal
        setCurrAttempt(currAttempt++)
    }
  return (
    <div className='key' id={bigKey && 'big' } onClick={selectLetter}>
        {keyVal}</div>
  )
}

export default Key