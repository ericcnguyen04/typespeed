import './App.css';

import Aside from './Components/partials/Aside'
import Nav from './Components/partials/Nav'
import Type from './Components/pages/Type'
import Profile from './Components/pages/Profile'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Aside />
        <Nav />

        <Routes>
          <Route 
          path="/"
          element={<Type />}
          />
          <Route 
          path="/profile"
          element={<Profile />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
