import React from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Calendar extends React.Component{
    render(){
        return(
            <div className="calendar">
                <ReactCalendar onClickDay = { this.props.onClickDay} />
            </div>
        )
    }
}

export default Calendar;