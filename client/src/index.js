import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/welcome';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './components/Dashboard';

function Index(){
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/dash">
            <Dashboard />
          </Route>
                 
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
    


ReactDOM.render(<Index/>, document.getElementById('root'));
