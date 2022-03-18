import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom'
import Screens from './Screens'

export default function App() {

  return (
    <>
      <Router>
        <Route>{Screens}</Route>
      </Router>
    </>
  );
}