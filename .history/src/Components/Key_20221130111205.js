import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey }) {
  const { board, setBoard, currAttempt, setCurrAttempt,onEnter,onDelete,onSelectLetter } =
    useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter()
    } else if (keyVal==="DELETE"){
      onDelete()
    }
    else {
      onSelectLetter()
    }
  };
  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;
