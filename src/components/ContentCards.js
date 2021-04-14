import { Component } from "react";
import Card from "./Card";
import "./ContentCards.css";
import axios from 'axios'

export default class ContentCards extends Component {
  state = {
    cards: [],
  };
async componentDidMount (){
const epis = await axios.get('http://localhost:3001/epis')
this.setState({
  cards:epis.data
})
}


  render() {
    return (
      <div className="contentCards">
        <div className="boxCards">
          {this.state.cards ? (
            this.state.cards.map((e) => {
              return <Card data={e} key={e._id} />;
            })
          ) : (
            <h1>erro</h1>
          )}
        </div>
      </div>
    );
  }
}
