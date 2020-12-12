import React from 'react'
import { Link } from "react-router-dom";

class Principal extends React.Component{
    render(){
        return(
            <div>
                <Link to='/turnos'>
                    <button>Solicitar turno</button>
                </Link>
                <h1>Pantalla principal</h1>
            </div>
        )
    }
}

export default Principal;