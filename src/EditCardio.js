import React from 'react';
import { useState } from "react";

export function EditCardio({ id, username, userpic, description, steps, Tips, Cardiodata }) {
  const [name, setName] = useState(username);
  const [pic, setPic] = useState(userpic);
  const [descriptions, setdes] = useState(description);
  const [step, setsteps] = useState(steps);
  const [Tip, setTips] = useState(Tips);
  const [save,setsave] = useState(true)
  const editu = () => {

    fetch("https://capstoneproject1299.herokuapp.com/Cardioupdate/" + id, {
      method: "PATCH",
      // header reamains same in all update operations
      headers: { "Content-Type": "application/json" },
      //in api data we are adding content to the body and appending data
      //name and pic in api database ok!  
      body: JSON.stringify({
        name: name,
        img: pic,
        description: descriptions,
        steps: step,
        Tips: Tip
      })
    }).then(() => Cardiodata());
    console.log("done");
    setsave(!save)
  };
  return (
    <div className="App">
      <div className="aaddcandid">
      <h3 className="edith3tag">Exercies Name</h3>

        <input
          className="edituserinput"
          value={name}
          onChange={(event) => setName(event.target.value)}

          placeholder="Enter your name" />
 <h3 className="edith3tag">Pic Url</h3>
        <input
          className="edituserinput"
          value={pic}
          onChange={(event) => setPic(event.target.value)}
          placeholder="Enter your pic url" />
        <h3 className="edith3tag">description</h3>

        
        <button className="editbutton" onClick={editu}>
      Save Changes
        </button> 
      </div>


    </div>
  );
}
