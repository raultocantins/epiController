import "./App.css";
import ContentCards from "../src/components/ContentCards";
function App() {
  return (
    <div className="App">
      <header >
        <nav>
         <button>Relátorio</button>
         <button>Lista de Epi</button>
         <button>Adicionar novo Epi</button>
        </nav>
      </header>
      <ContentCards />
    </div>
  );
}

export default App;
