import React from 'react'
import Calendar from '../calendar/calendar.js';

class form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.handleSend}>
                <div>
                    <input onChange={this.props.handleChange} name="petName" className="input"  type="text" placeholder="Pet Name"/>
                </div>
                <div>
                    <p>Qué quieres hacer?</p>
                    <select name="work" onChange={this.props.handleChange}>
                        <option>{'----'}</option>
                        <option>Baño</option>
                        <option>Corte</option>
                    </select>
                </div>
                <div>
                    <input onChange={this.props.handleChange} name="customerName" className="input" type="text" placeholder="Customer Name"/>
                </div>
                <div>
                    <input onChange={this.props.handleChange} name="phoneNumber" className="input" type="number" placeholder="Phone number"/>
                </div>
                <div>
                    <input onChange={this.props.handleChange} name="customerAdress" className="input" type="text" placeholder="Customer adress"/>
                </div>
                <div>
                    <input onChange={this.props.handleChange} name="customerEmail" className="input" type="text" placeholder="Customer Email"/>
                </div>

                <div>
                    <p>escoge tu turno</p>
                    <Calendar onClickDay = {this.props.onClickDay}/>
                </div>

                <button type="submit" onChange={this.props.handleChange} name="" className=""></button>

            </form>
        )
    }
}

export default form;