import React from "react";
import human1 from "../Assets/agent2.png";
import human2 from "../Assets/agent3.png";
import human3 from "../Assets/agent2.png";
function AboutUs() {
  let cards = [
    {
      id: 1,
      title: "Agent Elon",
      image: human1,
      description: "Co-Founder and CEO",
    },
    {
      id: 2,
      title: "Agent Tushar",
      image: human2,
      description: "VP, Business Development",
    },
    {
      id: 3,
      title: "Agent Vinod",
      image: human3,
      description: "CTO, Tech Development",
    },
  ];

  return (
    <div>
      <h3>About US</h3>

      <h4> </h4>
      <h2>About Tushar's Crypto Market</h2>

      <h4>
We are building the cryptoeconomy – a more fair, accessible, efficient, and transparent financial system enabled by crypto.

We started in 2012 with the radical idea that anyone, anywhere, should be able to easily and securely send and receive Bitcoin. Today, we offer a trusted and easy-to-use platform for accessing the broader cryptoeconomy.

Source - Coinbase
      </h4>

      <div className="wrapper">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              img={card.image}
              title={card.title}
              description={card.description}
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
        <img src={props.img} alt="Iphone" class="human_image" />
        <h2 className="card_title">{props.title}</h2>
        <p className="card_description">{props.description}</p>
        {/* <button className = "card_btn"> Buy Phone</button> */}
      </div>
    </div>
  );
}

export default AboutUs;
