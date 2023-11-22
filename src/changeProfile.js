import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../src/App";

const ChangeProfile = (props) => {
  const { setUsername } = useContext(AppContext);
  const [newUsername, setNewUsername] = useState("");
  return (
    <div>
      <br></br>
      <input onChange={(event) => { setNewUsername(event.target.value); }}/>
      <button onClick={() => {setUsername(newUsername)}}> Change Username</button>
    </div>
  )
}

export default ChangeProfile; 
