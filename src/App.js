import './App.css';
import { Header } from './components/Header.js';
import { CreateElement } from "./components/CreateElement.js";
import { ElementProvider } from "./context/ElementContext";
import { GeneratedElement } from "./components/GeneratedElement.js";

function App() {
  return (
    <ElementProvider>
      <div className="App">
        <Header />
        <CreateElement />
        <GeneratedElement />
      </div>
    </ElementProvider>
  );
}

export default App;
