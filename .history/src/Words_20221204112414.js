import wordBank from './wordle-bank.txt'
export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];

  const generateWordSet= async()=>{ // async because we using fetch API from JS
  let wordSet;
  await fetch(wordBank)
  .then((response)=>response.text())
  .then((result)=> {
    const wordArr = result.split("\n")
  }
  )
  

  }
