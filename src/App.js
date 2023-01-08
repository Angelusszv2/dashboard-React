import './App.css';
import Actividad from './components/Actividad';
import Persona from './components/Persona';
import datos from './data/data.json'
import { useState } from 'react';
function App() {
  const [tiempoval, Settiempoval] = useState("daily")

  const tiempos = (valor)=>{
    if(valor === "daily"){
      Settiempoval("daily")
    }
    else if(valor === "weekly"){
      Settiempoval("weekly")
    }
    else {
      Settiempoval("monthly")
    }

  }
  
  return (

      <div className="App">
      <Persona cambio = {tiempos} name="Jeremy" lastname = "Robson" />
      <Actividad nombre = {datos[0]} tiempo = {tiempoval} color = "hsl(15, 100%, 70%)" />
      <Actividad nombre = {datos[1]} tiempo = {tiempoval} color = "hsl(195, 74%, 62%)"/>
      <Actividad nombre = {datos[2]} tiempo = {tiempoval} color = "hsl(348, 100%, 68%)"/>
      <Actividad nombre = {datos[3]} tiempo = {tiempoval} color="hsl(145, 58%, 55%)" />
      <Actividad nombre = {datos[4]} tiempo = {tiempoval} color="hsl(264, 64%, 52%)"/>
      <Actividad nombre = {datos[5]} tiempo = {tiempoval} horapast = {36} color="hsl(43, 84%, 65%)"/>
      </div>
  );
}

export default App;
