import "./App.css";
import { useEffect, useState } from "react";
import ContentCards from "../src/components/ContentCards";
function App() {
  const [url, SetUrl] = useState("");
  useEffect(() => {
    switch (window.location.href) {
      case "http://localhost:3000/":
        SetUrl("home");
        break;

      default:
        break;
    }
  }, []);
  return (
    <div className="App">
      <header>
        <nav>
          <button
            style={
              url === "relatorios"
                ? { backgroundColor: "#ffbc01", color: "#fff" }
                : {}
            }
          >
            Relátorio
          </button>
          <button
            style={
              url === "home"
                ? { backgroundColor: "#ffbc01", color: "#fff" }
                : {}
            }
          >
            Lista de Epi
          </button>
          <button
            style={
              url === "adicionar"
                ? { backgroundColor: "#ffbc01", color: "#fff" }
                : {}
            }
          >
            Adicionar novo Epi
          </button>
        </nav>
      </header>
      <ContentCards />
    </div>
  );
}

export default App;
