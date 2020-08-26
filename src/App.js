import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import './style.css';
import Main from './Main';
import SEICOHORT from './SEICohort';


function App() {
  let SEIR713List = [
    "Levin",
    "Shane",
    "Martin",
    "David",
    "Josh",
    "Branden",
    "Anthony",
    "Margaret",
    "Alice",
    "Elaine",
    "Sameh",
    "Barent",
    "Tanner",
    "Han",
    "Alpha",
    "Channee",
    "Steven",
    "Yoel",
    "Cristina",
    "Nicholas",
    "Subrata",
    "Rohun",
    "Lizz",
    "Philip",
    "Irene"
  ]

  let SEI29List = [
    "Chris B",
    "Chris S",
    "Connie",
    "Danny",
    "Dylan",
    "Erik",
    "John",
    "Mac",
    "Melissa",
    "Pete",
    "Shawhien",
    "Solomon",
    "Tin",
  ]

  let cohorts = ['SEIR-713', 'SEI-29']

  return (
    <div className="App">
      <BrowserRouter basename="student-randomizer">
        <Link to="/" className="headerLink"><h1>Student Randomizer</h1></Link>
        <Switch>
          <Route path="/SEIR-713" render={()=><SEICOHORT students={SEIR713List} />} />
          <Route path="/SEI-29" render={()=><SEICOHORT students={SEI29List} />} />
          <Route path="/" render={() => <Main cohorts={cohorts} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
