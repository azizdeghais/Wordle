import React,{useContext} from 'react'
import {AppContext} from '../App'

function Letter({letterPos,attemptVal}) {
  const {board }=useContext;
  return (
    <div className='letter'>Letter</div>
  )
}

export default Letter