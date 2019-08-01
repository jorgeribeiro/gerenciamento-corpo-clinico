import React from 'react';
import doctor from './assets/doctor.svg';
import './App.css';

import "font-awesome/css/font-awesome.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={doctor} className="App-logo" alt="logo" />
        <p>
          Gerenciamento de Corpo Clínico
        </p>
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button>Entrar</button>        
        <button>Credenciamento</button>
      </header>
    </div>
  );
}

export default App;
