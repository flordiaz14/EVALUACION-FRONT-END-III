import React from "react"

const Historial = (props) => {
    console.log(props);
    return(
        <div className="historial recordatorio">
            <h3>Seleccion anterior: {props.ultimaOpcion.toUpperCase()}</h3>
            <h4>Historial de opciones elegidas: </h4>
            <ul>
                {
                    props.historial.map((opcion, index) => {
                        return <li key={index.toString()}>{opcion.toUpperCase()}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Historial;