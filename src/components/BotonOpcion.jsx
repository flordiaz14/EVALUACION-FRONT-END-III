import React from "react";

const BotonOpcion = (props) => {
    return (
        <div className = 'botonOpcion opciones'>
            <button className = 'botones' onClick = {() => props.funcionClick(props.opcion)}>{props.opcion}</button>
            <h2>{props.textoOpcion}</h2>
        </div>
    )
}

export default BotonOpcion;