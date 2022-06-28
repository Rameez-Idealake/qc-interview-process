import './App.css';
// import { components } from 'react';
import { MemoryRouter as Router, Routes, Link, Route, Switch } from 'react-router-dom';
import FormVanilla from "./components/formVanilla";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';

import SubmitTest from './components/submit-test';
import InitiateTest from './components/initiate-test';

const nameValidation = (fieldName, fieldValue) => {
  if (fieldValue.trim() === "") {
    // return `${fieldName} is required`;
    return 'This field is required';
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return "Invalid characters";
  }
  if (fieldValue.trim().length < 3) {
    return `${fieldName} needs to be at least three characters`;
  }
  return null;
};

const emailValidation = email => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return null;
  }
  if (email.trim() === "") {
    return "This field is required";
  }
  return "Please enter a valid email";
};

const ageValidation = age => {
  if (!age) {
    return "Age is required";
  }
  if (age < 18) {
    return "Age must be at least 18";
  }
  if (age > 99) {
    return "Age must be under 99";
  }
  return null;
};

const validate = {
  firstName: name => nameValidation("First Name", name),
  lastName: name => nameValidation("Last Name", name),
  email: emailValidation,
  age: ageValidation
};

const initialValues = {
  age: '',
  email: "",
  firstName: "",
  lastName: ""

  // age: 10,
  // email: "no@email",
  // firstName: "Mary",
  // lastName: "Jane"
};

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App container">
//           <ul>
//             <li>
//               <Link to="/initiateTest">Initiate Test</Link>
//             </li>
//             <li>
//               <Link to="/submitTest">Submit Test</Link>
//             </li>
//           </ul>

//           <Routes>
//             <Route exact path='/initiateTest' element={< InitiateTest />}></Route>
//             <Route exact path='/submitTest' element={< SubmitTest />}></Route>
//           </Routes>



//         </div>
//       </Router>


//     );
//   }
// }

// export default App;

function App() {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "960px",
        padding: "10px"
      }}
    >
      <Router>
        <div>
          <ul>
            <li>
            <Link to="/initiateTest">Initiate Test</Link>
            </li>
            <li>
              <Link to="components/formVanilla">Form with manual validation</Link>
            </li>
          </ul>
        </div>
        <Routes>
        <Route exact path='/initiateTest' element={< InitiateTest />}></Route>
        <Route exact path="components/formVanilla" element={<FormVanilla validate={validate} initialValues={initialValues} />}></Route>
 
        </Routes>
      </Router>

    </div>
  );
}

export default App;