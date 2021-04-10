import { Component } from "react";
import Card from "./Card";
import "./ContentCards.css";
export default class ContentCards extends Component {
  state = {
    cards: [
      {
        color: "Vermelho",
        id: 1,
        using:false,
      },
      {
        color: "Vermelho",
        id: 2,
        using:false,
      },
      {
        color: "Vermelho",
        id: 3,
        using:false,
      },
      {
        color: "Amarelo",
        id: 4,
        using:false,
      },
      {
        color: "Vermelho",
        id: 5,
        using:false,
      },
      {
        color: "Vermelho",
        id: 6,
        using:false,
      },
      {
        color: "Vermelho",
        id: 7,
        using:false,
      },
      {
        color: "Vermelho",
        id: 8,
        using:false,
      },
      {
        color: "Vermelho",
        id: 9,
        using:false,
      },
    ],
  };

  render() {
    return (
      <div className="contentCards">
      <div className='boxCards'>
      {this.state.cards
          ? this.state.cards.map((e) => {
              return <Card data={e} key={e.id}/>;
            })
          : <h1>erro</h1>}
        
      </div>
      </div>
    );
  }
}
