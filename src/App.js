import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Admin/Login/Login';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa el CSS de AOS
import HomeAdmin from './components/Admin/HomeAdmin/HomeAdmin';
import Register from './components/Admin/Register/Register';

// Inicializa AOS
AOS.init();

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path ="/admin" element={<HomeAdmin/>}/>
      </Routes>
    </div>
  );
}

export default App;
