import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import './style.css';
import Main from './Main';
import SEIR713 from './SEIR713';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="student-randomizer">
        <Link to="/" className="headerLink"><h1>Student Randomizer</h1></Link>
        <Switch>
          <Route path="/SEIR-713" component={SEIR713} />
          <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
