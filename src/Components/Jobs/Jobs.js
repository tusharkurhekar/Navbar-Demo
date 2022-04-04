import React from "react";
import tech from "../Assets/techsupport.png";
import cust from "../Assets/custsupport.png";
import sde from "../Assets/sdelogo.png";
import miner from "../Assets/miner1.png";
import fne from "../Assets/fnelogo.jpeg";
import cloud from "../Assets/cloudlogo.png";
import data from "../Assets/datalogo.png";
import direct from "../Assets/director.png";

function Jobs() {
  let cards = [
    { id: 1, title: "Tech Support Specialist", image: tech },
    { id: 2, title: "Customer Suppport Executive", image: cust },
    { id: 3, title: "Software Developer", image: sde },
    { id: 3, title: "Bitcoin Miner", image: miner },
    { id: 3, title: "Frontend Developer", image: fne },
    { id: 3, title: "Cloud Developer", image: cloud },
    { id: 3, title: "DataBase Developer", image: data },
    { id: 3, title: "Director, Engineering", image: direct },

  ];

  return (
    <div>
      <h3>Career Opportunities With Tushar's Crypto Market</h3>
      <div className="wrapper">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              img={card.image}
              title={card.title}
              description=""
            />
          );
        })}
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card_body">
        <img src={props.img} alt="coins" class="card_image" />
        <h2 className="card_title">{props.title}</h2>
        <p className="card_description">{props.description}</p>
        <button className="job_btn"> Submit Your Resume </button>
      </div>
    </div>
  );
}
export default Jobs;
