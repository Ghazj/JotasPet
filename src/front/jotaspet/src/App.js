import './App.css';
import backgroundPic from './assets/Background pic.jpg';
import { Switch, Route } from "react-router-dom";
import Principal from './screens/principal/principal';
import Request from './screens/request/request';
import Consulta from './screens/consulta/consulta.js';

function App() {
  return (
    <div className="App">
      <div className="background-pic-container" />
      <Switch>
{        /*<Route exact path='/'>
          <Principal />
        </Route>*/}
        <Route exact path='/consulta'>
          <Consulta />
        </Route>
        <Route path='/'>
          <Request />
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
