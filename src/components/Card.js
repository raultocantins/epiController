import React, { useState } from "react";
import CapaceteSvg from "../assets/dificil.svg";
import "./Card.css";
export default function Card(props) {
  const [using, SetUsing] = useState(false);
  const [time, SetTime] = useState(0);
  const [timeAtual, SetTimeAtual] = useState(0);
  const [DateOfDelivery, SetDateOfDelivery] = useState("");
  const [user, SetNameUser] = useState("");

  function setNewDelivery() {
    if (user.length > 5) {
      SetDateOfDelivery(new Date().toLocaleDateString());
      SetTime(new Date());    
      SetUsing(!using);
    } else {
      alert("Por favor set o nome !!!");
    }
  }
  function reverserDelivery() {
    SetUsing(!using);
  }

  return (
    <div
      className="card"
      style={
        using
          ? { backgroundColor: "#ff010140" }
          : { backgroundColor: "#ffbb0134" }
      }
    >
      {using ? (
        <div className="cardUsing">
          <div className="cardHeader">
            <div className="chart">
              <h1>0:00</h1>
            </div>
            <div className="describe">
              <p>Capacete: {props.data.id}</p>
              <p>Entregue para: {user}</p>
              <p>Data da entrega: {DateOfDelivery}</p>
            </div>
          </div>
          <button onClick={reverserDelivery}>Finalizar</button>
        </div>
      ) : (
        <React.Fragment>
          <div className="cardImg">
            <img src={CapaceteSvg} alt="capacete" />
            <p>
              Capacete: {props.data.id} {props.data.color}
            </p>
          </div>

          <div className="formCard">
            <input
              placeholder="Insert a Name"
              onChange={(e) => SetNameUser(e.target.value)}
            />
            <button onClick={setNewDelivery}>Marcar</button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
