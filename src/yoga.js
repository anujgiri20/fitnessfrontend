import React from 'react';
import ReactDOM from 'react-dom';
import { useState,useEffect } from 'react';

export function Yoga() {
  const [edit, setedit] = useState(false)
    const [yoga, setyoga] = useState([]);
    const Yogadata = () => {
      fetch("https://capstoneproject1299.herokuapp.com/yogadata", { method: "GET" })
        .then((data) => data.json())
        .then((newdata) => setyoga(newdata));
    };
    useEffect(() => {
      
      Yogadata();
    }, []);
    const deletUser = (id) => {
      fetch(`https://capstoneproject1299.herokuapp.com/deleteyoga/`+id,
        { method: "DELETE" }).then(() => Yogadata())
        console.log("deleted")
      console.log({id})
      
    }
    return (
      <>
   <div >
          {yoga.map((ur) => (
            <div className="chest_data_div_1" key={ur._id}>
             <div className="chest_data_div_inner">
               <div>
              <img className="chest_data_div_img" src={ur.data.bi.img} />
              </div>
              <div>
              <h1 className="chest_data_div_text">{ur.data.bi.name}</h1>
              <p  className="chest_data_div_p"><span className="span_">Discription</span>{ur.data.bi.description}</p>
              <p className="chest_data_div_p"><span className="span_">Steps</span>{ur.data.bi.steps}</p>
              <p className="chest_data_div_plast"><span className="span_">Tips</span>{ur.data.bi.Tips}</p>
            
              <button  className="delete_data_from_database" onClick={()=>deletUser(ur._id)}>Delete Item </button>
             
              <button className="editbtn" onClick={() => setedit(!edit)}>{edit ? "cansel " : ""}Edit</button>
            {edit ? <EditYoga key={ur._id} id={ur._id} username={ur.data.bi.name} userpic={ur.data.bi.img} description={ur.data.bi.description} steps={ur.data.bi.steps} Tips={ur.data.bi.Tips}  Yogadata={Yogadata}/> : ""}
           
              </div>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }
  


  function EditYoga({ id, username, userpic, description, steps, Tips, Yogadata }) {
    const [name, setName] = useState(username);
    const [pic, setPic] = useState(userpic);
    const [descriptions, setdes] = useState(description);
    const [step, setsteps] = useState(steps);
    const [Tip, setTips] = useState(Tips);
    const editu = () => {
  
      fetch("https://capstoneproject1299.herokuapp.com/yogaupdate/" + id, {
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
      }).then(() => Yogadata());
      console.log("done");
  
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
          <input
            className="edituserinput"
            value={descriptions}
            onChange={(event) => setdes(event.target.value)}
            placeholder="Enter your description" />
  
  <h3 className="edith3tag">Steps</h3>
          <input
            className="edituserinput"
            value={step}
            onChange={(event) => setsteps(event.target.value)}
            placeholder="Enter your pic url" />
             <h3 className="edith3tag">Tips</h3>
          <input
            className="edituserinput"
            value={Tip}
            onChange={(event) => setTips(event.target.value)}
            placeholder="Enter your pic url" />
          <button className="editbutton" onClick={editu}>
            Edit User
          </button>
        </div>
  
  
      </div>
    );
  }
  