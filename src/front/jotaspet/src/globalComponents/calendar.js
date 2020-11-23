import React from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Calendar extends React.Component{

    render(){
        return(
            <div className="calendar">
                <ReactCalendar onClickDay = { this.props.onClickDay} maxDate = { this.props.maxDate } minDate = { this.props.minDate } />
            </div>
        )
    }
}

export default Calendar;