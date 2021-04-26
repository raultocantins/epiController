import React, { useState } from "react";
import CapaceteSvg from "../assets/dificil.svg";
import "./Card.css";
import { setUser, removeUser } from "../controller/databaseLocal";
export default function Card(props) {
  const [user, SetNameUser] = useState("");

  function setNewDelivery() {
    if (user.length > 5) {
      setUser({ name: user, id: props.data.id });
      props.alert("Registrado com sucesso!  ", true);
      props.loadingData();
     
    } else {
      props.alert("Por favor insira o nome !!!", false);
    }
  }
  function finish() {
    removeUser(props.data.id);
    props.loadingData();
    props.alert("Entregue com sucesso! ", true);
  }

  return (
    <div
      className="card"
      
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
                Entregue para: <strong>{props.data.name}</strong>
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
