import './App.css';
import { Switch, Route } from "react-router-dom";
import Principal from './screens/principal/principal';
import Request from './screens/request/request';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Principal/>
        </Route>
        <Route path='/turnos'>
          <Request/>
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
