import React,{useContext} from 'react'
import App, {AppContext} from '../App'

function Letter({letterPos,attemptVal}) {
  const {board,correctWord,currATtempt}=useContext(AppContext);
  const letter = board[attemptVal][letterPos]


  const correct =  correctWord[letterPos] === letter
  const almost= !correct && letter !="" && correctWord.includes(letter)
  const letterState= currAttempt.attempt >(correct ? "correct": almost ? "almost": "error")
  return (
    <div id={letterState} className='letter'>{letter}</div>
  )
}

export default Letter