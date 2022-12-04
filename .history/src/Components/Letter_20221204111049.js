import React,{useContext} from 'react'
import App, {AppContext} from '../App'

function Letter({letterPos,attemptVal}) {
  const {board}=useContext(AppContext);
  const letter = board[attemptVal][letterPos]


  const correct = 
  const almost=
  const letterState=
  return (
    <div id={letterState} className='letter'>{letter}</div>
  )
}

export default Letter