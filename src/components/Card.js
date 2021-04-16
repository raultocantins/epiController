import React, { useState } from "react";
import CapaceteSvg from "../assets/dificil.svg";
import "./Card.css";
import axios from "axios";

export default function Card(props) {
  const [user, SetNameUser] = useState("");


  function setNewDelivery() {
    if (user.length > 5) {
      axios
        .post(`http://localhost:3001/epi/${props.data._id}`, {
          name: user,
          using: true,
        })
        .then((res) => {
          props.loadingData();
         props.alert("Registrado com sucesso!  ",true)
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
  
      props.alert("Por favor insira o nome !!!",false)
    }
  }
  function finish() {
    axios
      .post(`http://localhost:3001/epi/${props.data._id}`, {
        using: false,
      })
      .then((res) => {
        SetNameUser("");
        props.loadingData();
        props.alert("Entregue com sucesso! ",true)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div
      className="card"
      style={
        props.data.using
          ? { backgroundColor: "#ff010140" }
          : { backgroundColor: "#ffbb0134" }
      }
    >
      {props.data.using ? (
        <div className="cardUsing">
          <div className="cardHeader">
            <div className="chart">
              <h1>0:00</h1>
            </div>
            <div className="describe">
              <p>
                Capacete: <strong>{props.data.color}</strong>
              </p>
              <p>
                Entregue para: <strong>{props.data.entregue}</strong>
              </p>
              <p>
                Data da entrega: <strong>{props.data.data}</strong>
              </p>
            </div>
          </div>
          <button onClick={finish}>
            <strong>Finalizar</strong>
          </button>
        </div>
      ) : (
        <React.Fragment>
          <div className="cardImg">
            <img src={CapaceteSvg} alt="capacete" />
            <div className="describeCard">
              <p>
                <strong>
                  {props.data.name} {props.data.color}
                </strong>
              </p>
            </div>
          </div>

          <div className="formCard">
            <input
            className="enterUserName"
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
