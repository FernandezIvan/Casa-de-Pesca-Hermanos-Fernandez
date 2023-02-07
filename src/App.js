import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';





function App(){
  return(
    <div className="App">
      <img  callasName="icono"src='./imagenes/pescando.ong' alt="icono de tienda"></img>
   
      <Navbar />
      <itemListContainer greeting= 'vamos a pescar'/>
      </div>
  );
}

export default App;

