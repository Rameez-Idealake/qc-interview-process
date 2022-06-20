import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import SubmitTest from './components/submit-test';
import InitiateTest from './components/initiate-test';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <ul>
            <li>
              <Link to="/initiateTest">Initiate Test</Link>
            </li>
            <li>
              <Link to="/submitTest">Submit Test</Link>
            </li>
          </ul>

          <Routes>
            <Route exact path='/initiateTest' element={< InitiateTest />}></Route>
            <Route exact path='/submitTest' element={< SubmitTest />}></Route>
          </Routes>



        </div>
      </Router>


    );
  }
}

export default App;
