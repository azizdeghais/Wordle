import React,{useContext} from 'react'
import App, {AppContext} from '../App'

function Letter({letterPos,attemptVal}) {
  const {board}=useContext(AppContext);
  return (
    <div className='letter'>Letter</div>
  )
}

export default Letter