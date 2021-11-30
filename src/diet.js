

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import Select from 'react-select'



export function Diet()
{
    const dietblog=[
        {
            "id":1,
            "title":"8 THINGS YOU SHOULD DO BEFORE EVERY WORKOUT",
            "link":"https://www.muscleandfitness.com/workouts/workout-tips/8-things-you-should-do-every-workout-2/",
            "img":"https://www.muscleandfitness.com/wp-content/uploads/2018/12/stretching-man-GettyImages-654424976.jpg?w=940&h=529&crop=1&quality=86&strip=all"
        },
        {
            "id":2,
            "title":"HOW TO MAXIMIZE YOUR PRE- AND POST-WORKOUT ROUTINE",
            "link":"https://www.fitness19.com/how-to-maximize-your-pre-and-post-workout-routine/#",
            "img":"https://www.muscleandfitness.com/wp-content/uploads/2019/07/Hands-Clapping-Chaulk-Kettlebell.jpg?quality=86&strip=all"
        },
        {
            "id":3,
            "title":"Back to Blog 12 Top Fitness Blogs You Need to Follow",
            "link":"https://www.glofox.com/blog/fitness-blogs/",
            "img":"https://www.glofox.com/wp-content/uploads/2020/10/young-woman-workout-by-laptop-online-fitness-coach-workout-club-trainer-video-sport-class-social_t20_1nX4Yv-1024x683.jpg"
        },
        {
            "id":4,
            "title":"The Best Fitness Blogs of 2020",
            "link":"https://www.healthline.com/health/fitness-exercise/best-blogs-of-the-year#1",
            "img":"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/Fitness-best-blog-2020-1296x728-header-1296x728.jpg?h=3019"
        },
        {
            "id":5,
            "title":"The 7-Day Diet Plan for Weight Loss from 'The Biggest Loser' ",
            "link":"https://www.shape.com/weight-loss/tips-plans/7-day-diet-plan-weight-loss",
            "img":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2019%2F11%2Fshutterstock_1069332170-2000.jpg"
        },
        {
            "id":6,
            "title":"How to Lose Weight Fast: 3 Simple Steps, Based on Science",
            "link":"https://www.healthline.com/nutrition/how-to-lose-weight-as-fast-as-possible",
            "img":"https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/woman-measuring-stomach-1296x728.jpg?w=1155&h=1528"
        },
        {
            "id":7,
            "title":"Healthy Eating Habits From Around the World",
            "link":"https://www.webmd.com/diet/default.htm",
            "img":"https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/tips_for_new_and_current_vegetarians_slideshow/1800ss_getty_rf_food_on_table.jpg?resize=750px:*"
        }
    ]
    return(
        <>
    <div>
                {dietblog.map((ur) => (
                  <Dietblog_data key={ur.id}  text={ur.title} link={ur.link} img={ur.img}  />

                ))}
              </div>
    </>
    )
}



function Dietblog_data({text,link,img})
{
    return(
        <>
      <div className="dietblog">
          <div className="dietblo_sub">
          <h1 className="diet_text">{text}</h1>
          <a   className="diet_link"  onClick={()=>window.open(link)}  >Learn More</a>
          <img className="diet_img" src={img} />
          </div>
      </div>

        </>

    )
}