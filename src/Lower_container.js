import React from 'react';
import information from "./img/information.png"
import like from "./img/like.png"
import bicep from "./img/bicep.png"
import lik from "./img/lik.png"
export function Lower_container() {
  return (
    <>
      <div className="main_middle">
        <h1 className="middle_container_title">What we provide</h1>
        <div className="middle_container">
          <div className="card">
            <h1 className="card_text"><img className="card_img" src={information} />What is FitnessLab</h1>
            <h1 className="text">FitnessLab is a workout tracking tool. Add workouts, create your own customized workout plans or find suitable plan from other users. Accomplish your goals with motivation from personal trainer and committed training.</h1>
          </div>
          <div className="card">
          <h1 className="card_text"><img className="card_img" src={bicep} />Our Database</h1>
            <h1 className="text">FitnessLab has a database with over 300 exercises. The exercises come with detailed descriptions, tips and step-by-step images. If you don't find a exercise from our database, then you can also add your own exercises.</h1>
          </div>
          <div className="card">
          <h1 className="card_text"><img className="card_img" src={lik} />How we beat the rest</h1>
            <h1 className="text">Other workout apps take a simple thing and over complicate it. We believe that a workout log should do just what it says: log your workout. We keep Simple Workout Log simple by avoiding all the unnecessary extras. A workout log should be quick and easy to use in the gym without getting in your way, or slowing you down.</h1>
          </div>
          <div className="card">
          <h1 className="card_text"><img className="card_img" src={like} />Why people love it</h1>
            <h1 className="text">We've been able to put together a great combination of simplicity, usability, and features. Because of this, Simple Workout Log has become one of the most popular workout tracking apps on the Play Store.</h1>
          </div>


        </div>

      </div>
    </>

  );
}
