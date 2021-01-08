import React from 'react'
import Calendar from '../../../../globalComponents/calendar.js';
import './form.css';

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
        <div className="form-container">
            <form onSubmit={this.props.handleSend} className="form">
                <h2 className="h2">Toma tu turno!</h2>
                <div>
                    <input onChange={this.props.handleChange} name="petName" className="input"  type="text" placeholder="Pet Name"/>
                </div>
                <div>
                    <h4 className="h4">Qué quieres hacer?</h4>
                    <select className="select" name="work" onChange={this.props.handleChange}>
                        <option className="option">{'----'}</option>
                        <option className="option">Baño</option>
                        <option className="option">Corte</option>
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
                    <h4 className="h4">Escoge tu turno</h4>
                    <Calendar onClickDay = {this.props.onClickDay} maxDate = {this.maxDate()} minDate = {this.minDate()}/>
                </div>
                <div className="button-container">
                    <button type="submit" onChange={this.props.handleChange} name="" className="button">Enviar turno</button>
                </div>

            </form>
        </div>    
        )
    }
}

export default form;