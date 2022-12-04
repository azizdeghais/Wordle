import React,{useContext} from 'react'
import { AppContext} from '../App'

function Key({keyVal,bigKey}) {
    const {board}=useContext(AppContext);

    const selectLetter  = ()=>{
        const newBoard = [...board]
        currBoard[0][0] = keyVal
    }
  return (
    <div className='key' id={bigKey && 'big' } onClick={selectLetter()}>
        {keyVal}</div>
  )
}

export default Key