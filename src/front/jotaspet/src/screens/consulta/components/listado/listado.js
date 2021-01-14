import React from 'react';
import './listado.css';


class Listado extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fechaHoy: new Date()
        }
    }

    maxDate(){
        const twoWeeksInMiliseconds = 1209600033.2;
        const fechaHoyEnMilisegundos = this.state.fechaHoy.getTime();
        return twoWeeksInMiliseconds + fechaHoyEnMilisegundos;
    }

    minDate(){
        const oneDayInMiliseconds = 86400000;
        const fechaHoyEnMilisegundos = this.state.fechaHoy.getTime();
        return oneDayInMiliseconds + fechaHoyEnMilisegundos;
    }

    render(){
        return(
            <>
            <h1 className="list-title">{'Listado de turnos: ' + this.props.turnosEnPantalla.length}</h1>
            <div className="listado">
                {this.props.turnosEnPantalla.map((turn, i)=>(
                        <div className="turnCard" key={i}>       
                                <h1>#{i+1}</h1>
                                <h1>{turn.petName} - {turn.work}</h1>
                                <h2>Dueño:<br/>{turn.customerName}</h2>
                                <h2>Dirección: {turn.customerAdress}</h2>
                                <h2>Teléfono: {turn.phoneNumber}</h2>
                                <h3>Email:<br/></h3>
                                <j>{String(turn.customerEmail)}</j>
                                <h5>Fecha: {turn.fecha}</h5>
                                <button>Presente</button>
                                <button>Ausente</button>
                        </div>
                ))
                }
            </div>
            </>
        )
    }
}

export default Listado;