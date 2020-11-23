import React from 'react'
import Calendar from '../../../../globalComponents/calendar.js';

class form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fechaHoy: new Date()
        }
    }

    maxDate(){
        const twoWeeksInMiliseconds = 1209600033.2;
        const fechaHoyEnMilisegundos = this.state.fechaHoy.getTime();
        const maxDate = new Date(twoWeeksInMiliseconds + fechaHoyEnMilisegundos);
        return maxDate;
    }

    minDate(){
        const oneDayInMiliseconds = 86400000;
        const fechaHoyEnMilisegundos = this.state.fechaHoy.getTime();
        const minDate = new Date(oneDayInMiliseconds + fechaHoyEnMilisegundos)
        return minDate;
    }


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
                    <Calendar onClickDay = {this.props.onClickDay} maxDate = {this.maxDate()} minDate = {this.minDate()}/>
                </div>

                <button type="submit" onChange={this.props.handleChange} name="" className="">Enviar turno</button>

            </form>
        )
    }
}

export default form;