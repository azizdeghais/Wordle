import React from 'react'

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