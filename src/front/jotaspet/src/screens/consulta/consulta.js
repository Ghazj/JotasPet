import React from 'react';
import Listado from './components/listado/listado.js';
import { fetchTurnosSelectDay } from '../../apis/fetchTurnosSelectDay.js';
import Calendar from '../request/components/calendar/calendar.js';

class Consulta extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fecha: '',
            day: 0,
            date: 0,
            month: 0,
            year: 0,
            turnosActuales: [],
            turnosHoy: [],
            selectDayTurns: [],
            fechaActual: new Date()
        }
    }

    fetchTurnosSelectDay = async (data) =>{
        const res = await fetchTurnosSelectDay({fecha: "27-11-2020"});
        this.setState({turnosHoy: res.data});
    }

    async componentDidMount() {
        let fechaActual = String(this.state.fechaActual.getDate() + '-' + (this.state.fechaActual.getMonth() + 1) + '-' + this.state.fechaActual.getFullYear())
        this.fetchTurnosSelectDay({ fecha: fechaActual });
    }

    render(){
        return(
            <>
                <h1>Aquí Jota va a consultar los turnos.</h1>
                <h2>calendario para cambiar los turnos</h2>
                <Calendar></Calendar>
                <h2>Listado de turnos</h2>
                <Listado turnosHoy={this.state.turnosHoy}></Listado>
            </>
        )
    }
}

export default Consulta;