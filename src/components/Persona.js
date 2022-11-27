import React from 'react';
import Personaje from "../images/image-jeremy.png"
import "../styles/Persona.css"
function Persona() {
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
            <div className='tiempo__dia' >Daily</div>
            <div className='tiempo__semana' >Weekly</div>
            <div className='tiempo__dia' >Monthly</div>
          </div> 
        </div>
    )
}

export default Persona