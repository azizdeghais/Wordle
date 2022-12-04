import React from 'react'
import { createContext, useState } from "react";
import { AppContext} from 'react'

function Key({keyVal,bigKey}) {
    const {board}=useContext(AppContext);

    const selectLetter  = ()=>{
        const currBoard = [...]
    }
  return (
    <div className='key' id={bigKey && 'big' } onClick={selectLetter()}>
        {keyVal}</div>
  )
}

export default Key