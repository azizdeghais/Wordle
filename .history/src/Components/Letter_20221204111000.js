import React,{useContext} from 'react'
import App, {AppContext} from '../App'

function Letter({letterPos,attemptVal}) {
  const {board}=useContext(AppContext);
  const letter = board[attemptVal][letterPos]
  return (
    <div id={"correct"} className='letter'>{letter}</div>
  )
}

export default Letter