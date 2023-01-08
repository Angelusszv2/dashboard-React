import React from "react";
import "../styles/Actividad.css"
function Actividad(props){
    let val = props.nombre.timeframes;
    
    return(
        <div className="actividad" style={{backgroundColor: `${props.color}`}}>
            <img src={require(`../images/icon-${(props.nombre.title).toLowerCase()}.svg`)} alt={(props.nombre.title).toLowerCase()} />
            <div className="actividad__descripcion">
                <h2 className="actividad__nombre">{props.nombre.title}</h2>
                <p className="actividad__puntos">...</p>
                <p className="actividad__hora">{val[props.tiempo].current} hrs</p>
                <p className="actividad__horapast">{`Last ${props.tiempo} - ${val[props.tiempo].previous}hrs`}</p>
            </div>
        </div>
    )
}

export default Actividad