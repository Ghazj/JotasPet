import React from 'react';
import './listado.css';
class Listado extends React.Component{
    render(){
        return(
            <>
            <h1>Listado de turnos</h1>
            {this.props.turnosHoy.map((turn, i)=>(
                    <div className="turnCard" key={i}>
                        <h1>{turn.petName} - {turn.work}</h1>
                        <h2>Dueño: {turn.customerName}</h2>
                        <h2>Dirección: {turn.customerAdress}</h2>
                        <h2>Teléfono: {turn.phoneNumber}</h2>
                        <h3>Email: {turn.customerEmail}</h3>
                        <h5>Fecha: {turn.fecha}</h5>
                        <button>Confirmar</button>
                    </div>
            ))
            }
            </>
        )
    }
}

export default Listado;