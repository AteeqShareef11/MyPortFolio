import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";


const FrontEndData =[
  {
    id:1,
    title:"HTML5",
    desc:"Experienced",
  },
  {
    id:2,
    title:"CSS3",
    desc:"Experienced",
  },
  {
    id:3,
    title:"JavaScript",
    desc:"Experienced",
  },
  {
    id:4,
    title:"React js",
    desc:"Experienced",
  },
  {
    id:5,
    title:"Material UI",
    desc:"Experienced",
  },
  {
    id:6,
    title:"Tailwind CSS",
    desc:"Experienced",
  },
  
]

const BakeEndData =[
  {
    id:1,
    title:"Node js",
    desc:"Intermediate",
  },
  {
    id:2,
    title:"Express js",
    desc:"Intermediate",
  },
  {
    id:3,
    title:"MongoDb",
    desc:"Intermediate",
  },
  {
    id:4,
    title:"Firebase",
    desc:"Intermediate",
  },
  
]


const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_front">
          <h3>FrontEnd Development</h3>
          <div className="experience_content">

          {
            FrontEndData.map((item)=>(
              <article className="experience_details" key={item.id}>
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>{item.title}</h4>
                <small>{item.desc }</small>
              </div>
            </article>
            ))
          }


          </div>
        </div>
        <div className="experience_back">
          <h3>Backend Development</h3>
          <div className="experience_content">

          {
            BakeEndData.map((item)=>(
              <article className="experience_details" key={item.id}>
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h4>{item.title}</h4>
                <small>{item.desc}</small>
              </div>
            </article>
            ))
          }


          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
