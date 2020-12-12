import './App.css';
import { Switch, Route } from "react-router-dom";
import Principal from './screens/principal/principal';
import Request from './screens/request/request';
import Consulta from './screens/consulta/consulta.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Principal />
        </Route>
        <Route exact path='/turnos'>
          <Request />
        </Route>
        <Route exact path='/consulta'>
          <Consulta />
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
