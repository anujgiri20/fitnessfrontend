
import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from "react";
import heigh from "./img/heigh.png"
import scale from "./img/scale.png"
function BMI() {
    const [height, setHeight] = useState(0);
    const [mass, setMass] = useState(0);
    const [bmi, setBmi] = useState(0);
    const[bmi_report,setreport]=useState("")
  
    const calculate = (e) => {
      e.preventDefault();
      const formValid = +height > 0 && +mass > 0;
      if (!formValid) {
        return;
      }
      const bmi =( +mass / (+height) / (+height));
      setBmi(bmi*10000);
      if(bmi<=19)
      {
          setreport(" underweight ")
      }
      if(bmi>=19 && bmi<=25)
      {
          setreport(" healthy ")
      }
      if(bmi>=25 && bmi<=30)
      {
          setreport(" Overweight ")
      }
    };
  
    return (
      <div className="bmi_calculator">
         <div className="gif ">
         
         <h1 className="insert_data_title  insert_data_title_1" > <img className="insert_data_img1" src="https://c.tenor.com/WgEFraofeeYAAAAM/weight-overweight.gif" />  Bmi Calculator</h1>
         </div>
        <form  onSubmit={calculate}>
          <div>
            <h3 className="label">height in cm  <img className="card_img" src={heigh} /></h3>
            <input className="input1" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
  
          <div>
            <h3 className="label">mass in kg  <img className="card_img"  src={scale} /></h3>
            <input className="input1" value={mass} onChange={(e) => setMass(e.target.value)} />
          </div>
  
          <button className="submit_bmi" type="submit">calculate</button>
        </form>
        <p className="bmi_report">bmi: {bmi}</p>
        <h1 className="final_bmi">Your bmi report is<span className="bmi_final_report">  {bmi_report}  </span></h1>
      </div>
    );
  }
  export default BMI;