import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, NavLink, Route, Redirect } from 'react-router-dom';
import CreateComponent from './component/CreateComponent';
import EditComponent from './component/EditComponent';
import IndexComponent from './component/IndexComponent';
import Home from './component/home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>Welcome to my App</h2>
          <nav className="navbar navbar-expand-xl navbar-dark bg-info" >
          <NavLink className="navbar-brand" to={'/'}>ReactApp</NavLink>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to={'/'}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/create'}>Create</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/index'}>List</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/edit/:id'}>Edit</NavLink>
              </li>
            </ul>
          </nav>
          {/* <hr /> */}
          <main>
            <Switch>
              <Route path='/' exact component={Home} /> 
              <Route path='/create' component={CreateComponent} />
              <Route path='/edit/:id' component={EditComponent} />
              <Route path='/index' component={IndexComponent} />
              <Redirect to='/' />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
