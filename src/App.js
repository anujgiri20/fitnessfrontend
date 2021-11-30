import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from "react";
import './App.css';
import Carsoul from "./Carsoul"
import ReactPlayer from "react-player"
import Flip_card from './Flip_card';
import Select from 'react-select'
import { Insertdata } from "./insertdata"
import { GiHamburgerMenu } from "react-icons/gi";
import { Carsoul_img } from './Carsoul_img';
import { Circle_text } from './Circle_text';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Lower_container } from './Lower_container';
import { Diet } from "./diet"
import {Last_component} from "./last_container"
import {Yoga} from "./yoga"
import BMI from "./calculator"
import { Edituser } from './Edituser';
import { Editback } from './Editback';
import { Shoulderdata } from './Shoulderdata';
import { EditTricep } from './EditTricep';
import { EditBicep } from './EditBicep';
import { EditLeg } from './EditLeg';
import { EditCombined } from './EditCombined';
import { EditCardio } from './EditCardio';
import {EditAbdominal} from "./EditAbdominal"
// import {Insert} from "./insertdata";

function App() {

  const [navbar, setnavbar] = useState(false)


  return (
    <>
      <div className="navbar">

        <div className="navbar_title">
          <h4 className="navbar_text animate-charcter1">
           FitnessLab
          </h4>
        </div>
        <div className={navbar ? "navbar_link navbar_mobile_view" : "navbar_link"} >
          <ul className="ul">

            <li>
              <Link  className="a_tag" to="/">Home</Link>
            </li>
            <li>
              <Link className="a_tag" to="/gympath">Gym</Link>
            </li>
            <li>
              <Link className="a_tag" to="/yoga">Yoga</Link>
            </li>
            <li>
              <Link className="a_tag" to="/insertdata">Insert Data</Link>
            </li>
            <li>
              <Link className="a_tag" to="/bmi">BMI Calculator</Link>
            </li>
            <li>
              <Link className="a_tag" to="/dietplan">Blog</Link>
            </li>
          </ul>

        </div>
        <div className="hamburger-menu">
          <a  className="hambergu" href="#" onClick={() => setnavbar(!navbar)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </div>
      <div>

        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/gympath">
            <Router>
            <Gym />
            </Router>
          </Route>

          <Route path="/yoga">
            <Yoga />
          </Route>

          <Route path="/insertdata">
            <Insertdata />
          </Route>


          <Route path="/bmi">
            <BMI />
          </Route>
        </Switch>


        <Route path="/dietplan">
            <Diet />
          </Route>
 
 


      </div>

    </>
  );
}
export default App;






function Homepage() {
  return (
    <>
    {/* animate-charcter */}
      <div className="div">
        <div className="title">

          <h1 className="heading1 ">We Simplify Health</h1>
          <h1 className="heading2">So You Can Enjoy Life</h1>

        </div>
        <img className="fitness-img" src="https://images.pexels.com/photos/2291874/pexels-photo-2291874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        

        <div className="sidebar">
          <h1 className="fitness"><span className="fitness-child animate-charcter1">#</span>FitnessLab<span className="fitness-child animate-charcter1">#</span></h1>
        </div>

      </div>
      <div className="discription">
        <p className="disrciption_text" style={{ padding: "50px" }}>Fitnesslab has certified personal trainers that provide you with customised workout plans depending on your goals. Our trainers track your progress, coach and motivate you daily through our web and smartphone app.</p>
        {/* <ReactPlayer
           className="disrciption_text"
            url= 'https://videos.ctfassets.net/81qkq901sdfk/SoNpBSFFIeg7Hk0txFGNC/5fe07317024576dd242a9626c2df3629/Final-16x9-Fitlab-720.mp4'
            width='50%'
            height='50%'
            controls = {true}

          /> */}
      </div>
      <Carsoul />
      <Circle_text />
      <Lower_container />
     
      <div className="box_title">
        <h1 className="title_fitness">our products</h1>
      </div>
      <Carsoul_img />
      <div>

      </div>
     
     <Last_component />
   
    </>
  )
}







////component exercies




function Gym() {
const [gym,setgym] = useState(true)


  return (
    <>
    <div >
      <div>
      <button className="gym_btn" onClick={()=>setgym(!gym)}>{gym ? "close bar " : "open bar"}</button>
       {gym ? 
        <div className="link_exercies_route">
          <Link className="path_links" to="/">Chest</Link>

          <Link className="path_links" to="/back">Back</Link>

          <Link className="path_links" to="/shoulder">Shoulder</Link>

          <Link className="path_links" to="/triceps">Triceps</Link>

          <Link className="path_links" to="/bicep">Bicep</Link>

          <Link className="path_links" to="/leg">Legs</Link>

          <Link className="path_links" to="/Abdominal">Abdominal</Link>

          <Link className="path_links" to="/Combined">Combined</Link>

          <Link className="path_links" to="/Cardio">Cardio</Link>
        </div>
          : ""}
         
         <div>
          <Switch>
            <Route exact path="/">
            <Chest />
            </Route>
            <Route path="/back">
              <Back_component />
            </Route>
            <Route path="/shoulder">
              <Shoulder_component />
            </Route>
            <Route path="/triceps">
              <Tricep_component />
            </Route>
            <Route path="/bicep">
              <Bicep_component />
            </Route>
            <Route path="/leg">
              <Leg_component />
            </Route>
            <Route path="/Abdominal">
              <Abdominal_component />
            </Route>
            <Route path="/Combined">
              <Combined_component />
            </Route>
            <Route path="/Cardio">
              <Cardio_component />
            </Route>
          </Switch>
        </div>
      
        
      </div>


    </div>
    </>
  );
}

// chest

function Chest() { 


  // const [id,setid] = useState()
  const [api_data, setdata] = useState([]);
  const [edit, setedit] = useState(false)
  const getdatachest = () => {
    fetch("https://capstoneproject1299.herokuapp.com/chestdata", { method: "GET" })
      .then((data) => data.json())
      .then((newdata) => setdata(newdata));
  };
  useEffect(() => {
    
    getdatachest();
  }, []);
 

  const deletUser = (id) => {
    fetch(`https://capstoneproject1299.herokuapp.com/deletechest/`+id,
      { method: "DELETE" }).then(() => getdatachest())
   
    
  }

  return (
    <>
      <div >
        {api_data.map((ur) => (
          <div className="chest_data_div_1" key={ur._id} >
           <div className="chest_data_div_inner">
             <div>
            <img className="chest_data_div_img" src={ur.data.bi.img} />
            </div>
            <div>
            <h1 className="chest_data_div_text">{ur.data.bi.name}</h1>
            <p  className="chest_data_div_p"><span className="span_">Discription</span>{ur.data.bi.description}</p>
            <p className="chest_data_div_p"><span className="span_">Steps</span>{ur.data.bi.steps}</p>
            <p className="chest_data_div_plast"><span className="span_">Tips</span>{ur.data.bi.Tips}</p>
            <button  className="delete_data_from_database " onClick={()=>deletUser(ur._id)}>Delete Item </button>
            <button className="editbtn" onClick={() => setedit(!edit)}>{edit ? "cansel " : ""}Edit</button>
            {edit ? <Edituser key={ur._id} id={ur._id} username={ur.data.bi.name} userpic={ur.data.bi.img} description={ur.data.bi.description} steps={ur.data.bi.steps} Tips={ur.data.bi.Tips}  getdatachest={getdatachest}/> : ""}
            
            </div>
           
            </div>
         
            <div>
         
            </div>
          </div>
          
        ))}
          
      </div>
    
    </>
  )
}



// back

function Back_component() {
  const [back_data, setbackdata] = useState([]);
  const [edit, setedit] = useState(false)
  const backdata = () => {
    fetch("https://capstoneproject1299.herokuapp.com/backdata", { method: "GET" })
      .then((data) => data.json())
      .then((newdata) => setbackdata(newdata));
  };
  useEffect(() => {
    
    backdata();
  }, []);
  
  const deletUser = (id) => {
    fetch(`https://capstoneproject1299.herokuapp.com/deleteback/`+id,
      { method: "DELETE" }).then(() => backdata())
     
    
  }
  return (
    <>
      <div >
        {back_data.map((ur) => (
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
            {edit ? <Editback key={ur._id} id={ur._id} username={ur.data.bi.name} userpic={ur.data.bi.img} description={ur.data.bi.description} steps={ur.data.bi.steps} Tips={ur.data.bi.Tips}  backdata={backdata}/> : ""}
           
            </div>
            </div>
           
            <div>
         
            </div>
          </div>
        ))}
      </div>
    </>
  )
}



function Shoulder_component() {
  const [shoulder_data, setshoulderdata] = useState([]);
  const [edit, setedit] = useState(false)
  // //Shoulderdata

  const shoulderdata = () => {
    fetch("https://capstoneproject1299.herokuapp.com/Shoulderdata", { method: "GET" })
      .then((data) => data.json())
      .then((newdata) => setshoulderdata(newdata));
  };
  useEffect(() => {
    
    shoulderdata();
  }, []);
  const deletUser = (id) => {
    fetch(`https://capstoneproject1299.herokuapp.com/deleteShoulder/`+id,
      { method: "DELETE" }).then(() => shoulderdata())
     
    
  }
  return (
    <>
       <div >
        {shoulder_data.map((ur) => (
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
            {edit ? <Shoulderdata key={ur._id} id={ur._id} username={ur.data.bi.name} userpic={ur.data.bi.img} description={ur.data.bi.description} steps={ur.data.bi.steps} Tips={ur.data.bi.Tips}  shoulderdata={shoulderdata}/> : ""}
          
            </div>
            </div>
           
            <div>
         
            </div>
          </div>
        ))}
      </div>
    </>
  )
}



function Tricep_component() {
  const [triceps_data, settricepsdata] = useState([]);
  const [edit, setedit] = useState(false)
  // //Tricepsdata
  const tricepdata = () => {
    fetch("https://capstoneproject1299.herokuapp.com/Tricepsdata", { method: "GET" })
      .then((data) => data.json())
      .then((newdata) => settricepsdata(newdata));
  };
  useEffect(() => {
    
    tricepdata();
  }, []);


  const deletUser = (id) => {
    fetch(`https://capstoneproject1299.herokuapp.com/deletetriceps/`+id,
      { method: "DELETE" }).then(() => tricepdata())
     
    
  }
  return (
    <>
       <div >
        {triceps_data.map((ur) => (
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
            {edit ? <EditTricep key={ur._id} id={ur._id} username={ur.data.bi.name} userpic={ur.data.bi.img} description={ur.data.bi.description} steps={ur.data.bi.steps} Tips={ur.data.bi.Tips}  tricepdata={tricepdata} /> : ""}
            
            </div>
            </div>
           
            <div>
          
            </div>
          </div>
        ))}
      </div>
    </>
  )
}


function Bicep_component() {

  // //bicepdata
  const [edit, setedit] = useState(false)
  const [bicep_data, setbicepdata] = useState([]);
  const bicepsdata = () => {
    fetch("https://capstoneproject1299.herokuapp.com/bicepsdata", { method: "GET" })
      .then((data) => data.json())
      .then((newdata) => setbicepdata(newdata));
  };
  useEffect(() => {
 
    bicepsdata();
  }, []);

  const deletUser = (id) => {
    fetch(`https://capstoneproject1299.herokuapp.com/deletebiceps/`+id,
      { method: "DELETE" }).then(() => bicepsdata())
     
    
  }

  return (
    <>
       <div >
        {bicep_data.map((ur) => (
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
            {edit ? <EditBicep key={ur._id} id={ur._id} username={ur.data.bi.name} userpic={ur.data.bi.img} description={ur.data.bi.description} steps={ur.data.bi.steps} Tips={ur.data.bi.Tips}  bicepsdata={bicepsdata}/> : ""}
            
            </div>
            </div>
           
            <div>
           
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

function Leg_component() {
  //Legs data collection
  const [edit, setedit] = useState(false)
  const [leg_data, setlegdata] = useState([]);
  const legdata = () => {
    fetch("https://capstoneproject1299.herokuapp.com/Legsdata", { method: "GET" })
      .then((data) => data.json())
      .then((newdata) => setlegdata(newdata));
  };
  useEffect(() => {
  
    legdata();
  }, []);


  const deletUser = (id) => {
    fetch(`https://capstoneproject1299.herokuapp.com/deleteLegs/`+id,
      { method: "DELETE" }).then(() => legdata())
     
    
  }
  return (
    <>
      <div >
        {leg_data.map((ur) => (
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
            {edit ? <EditLeg key={ur._id} id={ur._id} username={ur.data.bi.name} userpic={ur.data.bi.img} description={ur.data.bi.description} steps={ur.data.bi.steps} Tips={ur.data.bi.Tips}  legdata={legdata}/> : ""}
           
            </div>
            </div>
           
            <div>
           
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

function Abdominal_component() {
  // //Abdominal data collection
  const [edit, setedit] = useState(false)
  const [Abdominal_data, setAbdominaldata] = useState([]);
  const Abdominaldata = () => {
    fetch("https://capstoneproject1299.herokuapp.com/Abdominaldata", { method: "GET" })
      .then((data) => data.json())
      .then((newdata) => setAbdominaldata(newdata));
  };
  useEffect(() => {
   
    Abdominaldata();
  }, []);
  const deletUser = (id) => {
    fetch(`https://capstoneproject1299.herokuapp.com/deleteAbdominal/`+id,
      { method: "DELETE" }).then(() => Abdominaldata())
     
    
  }
  return (
    <>
       <div >
        {Abdominal_data.map((ur) => (
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
            {edit ? <EditAbdominal key={ur._id} id={ur._id} username={ur.data.bi.name} userpic={ur.data.bi.img} description={ur.data.bi.description} steps={ur.data.bi.steps} Tips={ur.data.bi.Tips}  Abdominaldata={Abdominaldata}/> : ""}
          
            </div>
            </div>
           
            <div>
         
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
function Combined_component() {
  // //Combined data collection
  const [edit, setedit] = useState(false)
  const [Combined_data, setCombineddata] = useState([]);
  const Combineddata = () => {
    fetch("https://capstoneproject1299.herokuapp.com/Combineddata", { method: "GET" })
      .then((data) => data.json())
      .then((newdata) => setCombineddata(newdata));
  };
  useEffect(() => {
   
    Combineddata();
  }, []);
  const deletUser = (id) => {
    fetch(`https://capstoneproject1299.herokuapp.com/deleteCombined/`+id,
      { method: "DELETE" }).then(() => Combineddata())
     
    
  }
  return (
    <>
 <div >
        {Combined_data.map((ur) => (
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
            {edit ? <EditCombined key={ur._id} id={ur._id} username={ur.data.bi.name} userpic={ur.data.bi.img} description={ur.data.bi.description} steps={ur.data.bi.steps} Tips={ur.data.bi.Tips}  Combineddata={Combineddata}/> : ""}
            
            
            </div>
            </div>
           
            <div>
         
            </div>
          </div>
        ))}
      </div>
    </>
  )
}



function Cardio_component() {

  const [edit, setedit] = useState(false)
  const [Cardio_data, setCardiodata] = useState([]);
  // //Combined data collection
  const Cardiodata = () => {
    fetch("https://capstoneproject1299.herokuapp.com/Cardiodata", { method: "GET" })
      .then((data) => data.json())
      .then((newdata) => setCardiodata(newdata));
  };
  useEffect(() => {
   
    Cardiodata();

  }, []);
  const deletUser = (id) => {
    fetch(`https://capstoneproject1299.herokuapp.com/deleteCardio/`+id,
      { method: "DELETE" }).then(() => Cardiodata())
    
    
  }

  return (
    <>
      <div >
        {Cardio_data.map((ur) => (
          <div className="chest_data_div_1" key={ur._id}>
           <div className="chest_data_div_inner">
             <div>
            <img style={{paddingBottom:"100px"}} className="chest_data_div_img" src={ur.data.bi.img} />
            </div>
            <div>
            <h1 className="chest_data_div_text">{ur.data.bi.name}</h1>
            <button  className="delete_data_from_database" onClick={()=>deletUser(ur._id)}>Delete Item </button>
            <button className="editbtn" onClick={() => setedit(!edit)}>{edit ? "cansel " : ""}Edit</button>
            {edit ? <EditCardio key={ur._id} id={ur._id} username={ur.data.bi.name} userpic={ur.data.bi.img} description={ur.data.bi.description} steps={ur.data.bi.steps} Tips={ur.data.bi.Tips}  Cardiodata={Cardiodata}/> : ""}
          
            </div>
            </div>
           
            <div>
            
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

