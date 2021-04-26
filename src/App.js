import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHardHat } from '@fortawesome/free-solid-svg-icons'
import ContentCards from "../src/components/ContentCards";
function App() {
  return (
    <div className="App">
      <div className="title">
        <h2>Dashboard Caltins Calcario Tocantins(Portaria)</h2>
      </div>
      <header>
        <nav>
       
          <button><FontAwesomeIcon icon={faHardHat} style={{marginRight:'5px'}}/>Controle de EPI</button>
         
        </nav>
      </header>
      <div className="container">

      <ContentCards />
      </div>
    </div>
  );
}

export default App;
