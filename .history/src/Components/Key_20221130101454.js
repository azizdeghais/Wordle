import React,{useContext} from 'react'
import { AppContext} from '../App'

function Key({keyVal,bigKey}) {
    const {board}=useContext(AppContext);

    const selectLetter  = ()=>{
        const currBoard = [...board]
    }
  return (
    <div className='key' id={bigKey && 'big' } onClick={selectLetter()}>
        {keyVal}</div>
  )
}

export default Key