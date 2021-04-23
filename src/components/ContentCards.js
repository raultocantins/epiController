import { Component } from "react";
import Card from "./Card";
import "./ContentCards.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { setLocalstorage } from "../controller/databaseLocal";

export default class ContentCards extends Component {
  state = {
    cards: [],
    msg: "",
  };
  constructor(props) {
    super(props);
    this.loadingData = this.loadingData.bind(this);
    this.alert = this.alert.bind(this);
  }
  alert(msg, isSucces, duration = 2000) {
    var alert = document.getElementsByClassName("alert");
    this.setState({
      msg: msg,
    });
    if (isSucces) {
      alert[0].style.backgroundColor = "rgba(0, 128, 0, 0.623)";
      alert[0].style.display = "flex";
    } else {
      alert[0].style.backgroundColor = "#ff0101c0";
      alert[0].style.display = "flex";
    }

    setTimeout(() => {
      alert[0].style.display = "none";
    }, duration);
  }

  componentDidMount() {
    var myData = window.localStorage.getItem("mydata");
    if (myData === null || undefined) {
      setLocalstorage();    
    }
    var myDataJson = JSON.parse(myData);
    this.setState({
      cards: myDataJson,
    });

  }
  async loadingData() {
   
    var myData = window.localStorage.getItem("mydata");
    var myDataJson = JSON.parse(myData);
    this.setState({
      cards: myDataJson,
    });
  }

  render() {
    return (
      <div className="contentCards">
       
        <div className="alert">{this.state.msg}</div>
        <div className="boxCards">
          {this.state.cards ? (
            this.state.cards.map((e) => {
              return (
                <Card
                  data={e}
                  key={e.id}
                  loadingData={this.loadingData}
                  alert={this.alert}
                />
              );
            })
          ) : (
            <CircularProgress color="secondary" />
          )}
        </div>
      </div>
    );
  }
}
