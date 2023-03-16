import './App.css';

import Aside from './Components/partials/Aside'
import Nav from './Components/partials/Nav'
import Type from './Components/pages/Type'

function App() {
  return (
    <div className="App">
      <Aside />
      <Nav />

      <Type />
    </div>
  );
}

export default App;
