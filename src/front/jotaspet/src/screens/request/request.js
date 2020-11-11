import React from 'react'
import Form from './components/form/form.js'
import ReactCalendar from 'react-calendar'
let date = new Date()
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
            customerEmail:''
        }
        this.sendRequest = this.sendRequest.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onClickDay = this.onClickDay.bind(this);
    }

    sendRequest(e){
        console.log(this.state)
        e.preventDefault()
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

    render(){
        return(
            <>
                <h1>Pantalla para tomar turno</h1>
                <Form sendRequest = {this.sendRequest} handleChange={this.handleChange} onClickDay= {this.onClickDay}></Form>
            </>
        )
    }
}

export default Request;