import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, NavLink, Route, Redirect } from 'react-router-dom';
import CreateComponent from './component/CreateComponent';
import EditComponent from './component/EditComponent';
import IndexComponent from './component/IndexComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to my App</h2>
          <ul>
          <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/create'}>Create</NavLink></li>
            <li><NavLink to={'/index'}>List</NavLink></li>
            <li><NavLink to={'/edit/:id'}>Edit</NavLink></li>
          </ul>
          <hr />
          <main>
            <Switch>
              <Route path='/create' exact component={CreateComponent} />
              <Route path='/edit/:id' exact component={EditComponent} />
              <Route path='/index' exact component={IndexComponent} />
              <Redirect to='/create' />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
