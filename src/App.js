import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';
import DataActions from './flux/actions/DataActions';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './paginas/Home';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <Switch>
                  <Route path="/" component={ Home } exact />
                  <Route render={() => { return <Redirect to="/" /> }} />
              </Switch> 
          </div>
      </Router>
    );
  }
}



export default App;
