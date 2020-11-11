import React from 'react'
import Form from './components/form/form.js'

class Request extends React.Component{

    constructor(){
        super();
        this.state={
            year:new Date().getFullYear(),
            petName: '',
            work:'',
            customerName:'',
            phoneNumber: 0,
            customerAdress: '',
            customerEmail: ''
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

    }

    render(){
        return(
            <>
                <h1>Pantalla para tomar turno</h1>
                <Form sendRequest = {this.sendRequest} handleChange={this.handleChange}></Form>
            </>
        )
    }
}

export default Request;