import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Routers from './routes';
import './styles/global.css'

function App() {
  return (
    <Router>
      <Routers/>
    </Router>
  );
}

export default App;
