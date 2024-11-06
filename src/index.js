import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router, // Change BrowserRouter to HashRouter
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import './style.css';
import Home from './views/home';
import About from './views/about';
import Contact from './views/contact';
import NotFound from './views/not-found';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route component={Home} exact path="/" />  {/* Adjusted paths for HashRouter */}
                <Route component={About} exact path="#/about" />
                <Route component={Contact} exact path="#/contact" />
                <Route component={NotFound} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
