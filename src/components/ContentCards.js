import { Component } from "react";
import Card from "./Card";
import "./ContentCards.css";
import axios from "axios";

export default class ContentCards extends Component {
  state = {
    cards: [],
    msg:""
  };
  constructor(props){
super(props)
this.loadingData=this.loadingData.bind(this)
this.alert=this.alert.bind(this)
  }
alert(msg,isSucces,duration=2000){
  var alert = document.getElementsByClassName('alert')
this.setState({
  msg:msg
})
if(isSucces){
  alert[0].style.backgroundColor="rgba(0, 128, 0, 0.623)"
  alert[0].style.display="flex"
}else{
  alert[0].style.backgroundColor="#ff0101c0"
  alert[0].style.display="flex"
}

setTimeout(()=>{
  alert[0].style.display="none"
},duration)


}

   componentDidMount() {
   axios.get("http://localhost:3001/epis").then(res=>{
    this.setState({
      cards: res.data,
    });
   }).catch(err=>{
    this.alert("NetWork error, tentando reload...",false,4000)
  setInterval(()=>{
window.location.reload()
  },5000)
    console.log(err)
   })
  
  }
  async loadingData() {
    const epis = await axios.get("http://localhost:3001/epis");
    
    this.setState({
      cards: epis.data,
    });
  }

  render() {
    return (
      <div className="contentCards">
        <div className="alert">
          {this.state.msg}
        </div>
        <div className="boxCards">
          {this.state.cards ? (
            this.state.cards.map((e) => {
              return <Card data={e} key={e._id} loadingData={this.loadingData} alert={this.alert}/>;
            })
          ) : (
            <h1>erro</h1>
          )}
        </div>
      </div>
    );
  }
}
