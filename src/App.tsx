import React, { useContext } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { CadGerente } from './pages/CadGerente';
import { RequireAuth } from './contexts/Auth/RequireAuth';
//import { AuthContext } from './contexts/Auth/AuthContext';


function App() {
//  const auth = useContext(AuthContext);

  // const handleLogout = async () => {
  //   await auth.signout();
  //   window.location.href = window.location.href;
  // }

  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cadgerente">Cadastro de Gerentes</Link>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadgerente" element={<RequireAuth><CadGerente/></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
