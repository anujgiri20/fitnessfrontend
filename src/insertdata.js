import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import Select from 'react-select'
import weightlifting from "./img/weightlifting.png"



export function Insertdata() {

  const [name, setName] = useState("");

  const [pic, setPic] = useState("");
  const [users, setUsers] = useState([]);
  const [popup, useradded] = useState("")
  const [popup_img, setpopup] = useState("")
  const [addrtype, setAddrType] = useState('Home')
  const [link, setlink] = useState("")
  const [description, setdescription] = useState("")
  const [steps, setsteps] = useState("")
  const [Tips, setTips] = useState("")
  const [popup_text,setpopup_text]=useState("")
const [popup_cansel,setCanselpopup] = useState("")
const [showpopup,setshowpopup] = useState(false)

  const data_exercies = [
    {
      value: "chest",
      label: "chest"
    },
    {
      value: "biceps",
      label: "biceps"
    },
    {
      value: "back",
      label: "back"
    },
    {
      value: "Triceps",
      label: "Triceps"
    },
    {
      value: "Shoulder",
      label: "Shoulder"
    },
    {
      value: "Legs",
      label: "Legs"
    },
    {
      value: "Abdominal",
      label: "Abdominal"
    },
    {
      value: "Combined",
      label: "Combined"
    },
    {
      value: "Cardio",
      label: "Cardio"
    },
    {
      value: "yoga",
      label: "yoga"
    }
  ]

  const [url, seturl] = useState(data_exercies.label)






 






  ///cardio added
  const addUser = () => {

    fetch(`https://capstoneproject1299.herokuapp.com/${url}`, {
      method: "POST",
      // header reamains same in all update operations
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{
        data: {
          bi: {
            name: name,
            img: pic,
            description: description,
            steps: steps,
            Tips: Tips

          }
        }
      }])

    })
    setPic("")
    setName("")
    useradded("New folder added successfully , check in Dashboard");
    setpopup("https://media2.giphy.com/media/4bjIKBOWUnVPICCzJc/giphy.gif?cid=ecf05e47eachzgqops9tgfqo3jdy4ag5dg0nc5q4bm53phcb&rid=giphy.gif&ct=g")
    
    setdescription("")
    setsteps("")
    setTips("")
    setpopup_text("Data inserted succesfully")
    setCanselpopup("x")
    setshowpopup(!showpopup)
  }



  const ddHandler = e => {
    seturl(e.label)
  }







  return (
    <>
      <div className="div_insert_data">
        <div className="gif">
         
        <h1 className="insert_data_title" > <img className="insert_data_img" src={weightlifting} /> Add Data To DataBase</h1>
        </div>
        <div>


          <div>
            <Select
              onChange={ddHandler}
              className="dropdown"

              options={data_exercies}
            />

          </div>


        </div>

        <input
          className="input input1"
          value={name}
          onChange={(event) => setName(event.target.value)}

          placeholder="Enter exercies name"
        />

        <input
          className="input1"
          value={pic}
          onChange={(event) => setPic(event.target.value)}
          placeholder="Enter pic or gif url"
        />



        <input
          className="input1"
          value={description}
          onChange={(event) => setdescription(event.target.value)}
          placeholder="Enter exercies description"
        />

        <input
          className="input1"
          value={steps}
          onChange={(event) => setsteps(event.target.value)}
          placeholder="Enter exercies steps"
        />

        <input
          className="input1"
          value={Tips}
          onChange={(event) => setTips(event.target.value)}
          placeholder="Enter exercies tips"
        />

        <button className="button1" onClick={addUser}>
         <span className="button_text"> Add User</span>
        </button>
        
        <div> 
      {showpopup ?
      <div className="set_popupdiv">
        <button className="closebtn" onClick={()=>setshowpopup(!showpopup)}>X</button>
       <p className="popup_data">successful</p>
       </div> 
       : "" } 
        </div>
       

      </div>
    </>

  );

}

