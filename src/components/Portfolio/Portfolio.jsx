import React from "react";
import "./Portfolio.css";
import IMG1 from "../../asset/portfolio1.jpg";
import IMG2 from "../../asset/portfolio2.jpg";
import IMG3 from "../../asset/portfolio3.jpg";
import IMG4 from "../../asset/portfolio4.jpg";
import IMG5 from "../../asset/portfolio5.png";
import IMG6 from "../../asset/portfolio6.jpg";


const data =[
  {
    id:1,
    image:IMG1,
    title:"alayzone portfolio",
    github:"https://github.com/AteeqShareef11",
    demo:"https://alayzone.com/"
  },
  {
    id:2,
    image:IMG2,
    title:"Quizzing Box",
    github:"https://github.com/AteeqShareef11/QuizBozNew",
    demo:"https://melodious-pixie-228e72.netlify.app/"
  },
  {
    id:3,
    image:IMG3,
    title:"City Food",
    github:"https://github.com/AteeqShareef11",
    demo:"https://alayzone.com/"
  },
  {
    id:4,
    image:IMG4,
    title:"Shoe Shop",
    github:"https://github.com/AteeqShareef11",
    demo:"https://shoeshop11.herokuapp.com"
  },
  {
    id:5,
    image:IMG5,
    title:"Movie App",
    github:"https://github.com/AteeqShareef11",
    demo:"https://alayzone.com/"
  },
  {
    id:6,
    image:IMG6,
    title:"title of the projrct",
    github:"https://github.com/AteeqShareef11",
    demo:"https://alayzone.com/"
  }
]



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
{
  data.map((item)=>(
    <article key={item.id} className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={item.image} alt="" />
          </div>
          <h3>{item.title}</h3>
          <div className="portfolio_item_cta">
            <a
              href={item.github}
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href={item.demo}
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
  ))
}




      </div>
    </section>
  );
};

export default Portfolio;
