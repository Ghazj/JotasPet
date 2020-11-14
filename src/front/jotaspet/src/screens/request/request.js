import React from 'react';
import Form from './components/form/form.js';
import { fetchTurnos } from '../../apis/fetchTurnos.js';
import { postTurn } from '../../apis/postTurn.js';

class Request extends React.Component{
    constructor(){
        super();
        this.state={
            fecha: '',
            day: 0 ,
            date: 0 ,
            month: 0,
            year: 0,
            time: 0 ,
            work: '',
            petName:'' ,
            customerName:'' ,
            phoneNumber: 0,
            customerAdress:'' ,
            customerEmail:'',
            turnosActuales: {}
        }
        this.handleSend = this.handleSend.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onClickDay = this.onClickDay.bind(this);
    }
    
    getTurnos = async () => {
        const res = await fetchTurnos();
        this.setState({turnosActuales: res.data});
    }

     async componentDidMount() {
        await this.getTurnos();
        console.log(this.state.turnosActuales);
    }

    handleChange(e){
        let {name, value} = e.target;
        console.log(e);
        this.setState({[name]: value})
    }
            
    onClickDay(value, e){
        let selectFecha = new Date(value)
        let day = selectFecha.getDay();
        let date =  selectFecha.getDate();
        let month = selectFecha.getMonth()+1;
        let year = selectFecha.getFullYear();
                
        this.setState({day:day})
        this.setState({date:date})
        this.setState({month:month})
        this.setState({year:year})
        this.setState({fecha: date+'-'+month+'-'+year})
    }
    
    postTurn = async (data) => {
        await postTurn(data)
        console.log('turno enviado con exito')
    }

    handleSend(e){
        e.preventDefault()
        console.log(this.state);
        const data = {
            fecha: this.state.fecha,
            day: this.state.day,
            date: this.state.date ,
            month: this.state.month,
            year: this.state.year,
            time: this.state.time,
            work: this.state.work,
            petName: this.state.petName,
            customerName: this.state.customerName,
            phoneNumber: this.state.phoneNumber,
            customerAdress: this.state.customerAdress,
            customerEmail: this.state.customerEmail
        }
        console.log(this.state.turnosActuales)
        this.postTurn(data);
    }
    
    render(){
        return(
            <>
                <h1>Pantalla para tomar turno</h1>
                <Form handleSend = {this.handleSend} handleChange={this.handleChange} onClickDay= {this.onClickDay}></Form>
            </>
        )
    }
}

export default Request;