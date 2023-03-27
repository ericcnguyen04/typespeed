import './App.css';

import Aside from './Components/partials/Aside'
import Nav from './Components/partials/Nav'
import Type from './Components/pages/Type'

import { Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route></Route>

        <div className="App">
          <Aside />
          <Nav />

          <Type />
        </div>
      </Routes>
    </Router>
  );
}

export default App;
