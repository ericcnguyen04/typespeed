import './App.css';

import Aside from './Components/partials/Aside'
import Nav from './Components/partials/Nav'
import Type from './Components/pages/Type'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Aside />
            <Nav />

            <Route 
            path="/"
            element={<Type />}
            />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
