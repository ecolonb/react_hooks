import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import RegisterPage from '../../pages/register/RegisterPage';
import CssGrid from '../../pages/css_grid/CssGrid';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/" component={CssGrid} />
      </Switch>
    </Router>
  );
}

export default App;
