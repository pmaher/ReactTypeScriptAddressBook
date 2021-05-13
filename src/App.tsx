import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Application from './components/App';
import './App.css';

function App() {
  return (
    <HashRouter>
        <Switch>
            <Route exact path="/">
                <Application children={<div>test</div>}></Application>
            </Route>
            <Route exact path="/address">
                <Application children={<div>address</div>}></Application>
            </Route>
        </Switch>
    </HashRouter>
  );
}

export default App;
