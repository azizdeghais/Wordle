import React,{useState} from 'react'
import { boardDefault } from '../Words'

function Board() {

const [board,setBoard]=useState(boardDefault);

  return (
    <div className='board'>
        <div className='row'><Letter letterPos={} attemptVal={}></Letter></div>
        <div className='row'><Letter letterPos={} attemptVal={}></Letter></div>
        <div className='row'><Letter letterPos={} attemptVal={}></Letter></div>
        <div className='row'><Letter letterPos={} attemptVal={}></Letter></div>
        <div className='row'><Letter letterPos={} attemptVal={}></Letter></div>
        <div className='row'><Letter letterPos={} attemptVal={}></Letter></div>
    </div>
  )
}

export default Board