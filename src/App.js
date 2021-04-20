import './App.css';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import ClientView from './Clients/ClientView';
import ClientList from './Clients/ClientList';

function App() {
    return (
        <div className="App">
            <Router>
                <div id="navBox">
                    <Link className="navElement" to="/">Home</Link>
                    <Link className="navElement" to="/clients">Clients</Link>
                </div>
                <hr />
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/clients" />
                    </Route>
                    <Route exact path="/clients">
                        <ClientList />
                    </Route>
                    <Route exact path="/clients/:id">
                        <ClientView />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;