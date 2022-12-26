import React from 'react';
import { useState } from 'react';
import Personaje from "../images/image-jeremy.png"
import "../styles/Persona.css"
function Persona() {
  const [daily,setDaily] = useState(false);
  const [weekly,setWeekly] = useState(false);
  const [monthly,setMonthly] = useState(false);
  let cambio = (e)=>{
    if (e.target.textContent == "Daily"){
      setDaily(true);
      setWeekly(false);
      setMonthly(false);
    }
    if (e.target.textContent == "Weekly"){
      setDaily(false);
      setWeekly(true);
      setMonthly(false);
    }
    if (e.target.textContent == "Monthly"){
      setDaily(false);
      setWeekly(false);
      setMonthly(true);
    }

  }  
    return(
        <div className="persona" >
          <div className="persona__info">
            <div className='persona__foto'>
              <img src={Personaje} alt = "Jeremy" />
            </div>
            <div className='persona-infodetalle'>
              <p>Report for</p>
              <p>Jeremy Robson</p>
            </div>
          </div>
          <div className="persona__tiempo">
            <div className={`tiempo__dia ${daily?"marcado":"nomarcado"}`} onClick={cambio} >Daily</div>
            <div className={`tiempo__semana ${weekly?"marcado":"nomarcado"}` } onClick={cambio}>Weekly</div>
            <div className={`tiempo__semana ${monthly?"marcado":"nomarcado"}` } onClick={cambio}>Monthly</div>
          </div> 
        </div>
    )
}

export default Persona