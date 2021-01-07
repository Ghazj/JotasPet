import React from 'react';
import Listado from './components/listado/listado.js';
import { fetchTurnosSelectDay } from '../../apis/fetchTurnosSelectDay.js';
import Calendar from '../../globalComponents/calendar.js';

class Consulta extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectFecha: '',
            turnosEnPantalla: [],
            fechaActual: new Date()
        }
        this.onClickDay = this.onClickDay.bind(this);
    }

    fetchTurnosSelectDay = async (data) =>{
        const res = await fetchTurnosSelectDay(data);
        this.setState({turnosEnPantalla: res.data});
    }

    async componentDidMount() {
        const fechaActual = String(this.state.fechaActual.getDate() + '-' + (this.state.fechaActual.getMonth() + 1) + '-' + this.state.fechaActual.getFullYear())
        this.fetchTurnosSelectDay({ fecha: fechaActual });
    }

    async onClickDay(value, e){
        console.log(e)
        console.log(value)
        const selectFecha = new Date(value)
        const date =  selectFecha.getDate();
        const month = selectFecha.getMonth()+1;
        const year = selectFecha.getFullYear();
        this.setState({selectFecha: date+'-'+month+'-'+year});
        this.fetchTurnosSelectDay({fecha: date+'-'+month+'-'+year});
    }

    render(){
        return(
            <>
                <h1>{this.state.fechaActual.getDate() + '-' + (this.state.fechaActual.getMonth() + 1) + '-' + this.state.fechaActual.getFullYear()}</h1>
                <h2>calendario para cambiar los turnos</h2>
                <Calendar onClickDay = {this.onClickDay}></Calendar>
                <Listado turnosEnPantalla={this.state.turnosEnPantalla}></Listado>
            </>
        )
    }
}

export default Consulta;