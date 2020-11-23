import React from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Calendar extends React.Component{
    constructor(){
        super()
        this.state = {
            fechaHoy: new Date()
        }
    }

    maxDate(){
        const twoWeeksInMiliseconds = 1209600033.2;
        const fechaHoyEnMilisegundos = this.state.fechaHoy.getTime();
        return twoWeeksInMiliseconds + fechaHoyEnMilisegundos;
    }

    render(){
        return(
            <div className="calendar">
                <ReactCalendar onClickDay = { this.props.onClickDay} maxDate = {new Date(this.maxDate())} />
            </div>
        )
    }
}

export default Calendar;