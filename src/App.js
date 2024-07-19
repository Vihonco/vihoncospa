import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
// En tu archivo principal, como index.js o App.js
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa el CSS de AOS

// Inicializa AOS
AOS.init();

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
         
          <Route path="/" element={<Home />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
