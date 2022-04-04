import React from "react";
import bitcoin from "../Assets/bitlogo.png";
import eth from "../Assets/ethlogo.png";
import doge from "../Assets/dogecoinlogo.png";
import thrd from "../Assets/thrdlogo.png";

class Home extends React.Component {
  cards = [
    {
      id: 1,
      title: "Etherium",
      image: eth,
      description: "Etherium, Stable Currency",
    },
    {
      id: 2,
      title: "BitCoin",
      image: bitcoin,
      description: "The King of Currencies",
    },
    {
      id: 3,
      title: "Doge Coin",
      image: doge,
      description: "Watch Elons Twitter",
    },
    {
      id: 4,
      title: "Xrp Ripple",
      image: thrd,
      description: "Invest in New Coins",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      butttonText: "Red",
    };
  }

  render() {
    return (
      <div className="wrapper">
        {this.cards.map((card, index) => {
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
    );
  }
}

function Card(props) {
  return (
    <div className="card">
      <div className="card_body">
        <img src={props.img} alt="coin" class="card_image" />
        <h2 className="card_title">{props.title}</h2>
        <p className="card_description">{props.description}</p>
        <button className="card_btn"> Buy Now!! </button>
      </div>
    </div>
  );
}
export default Home;
