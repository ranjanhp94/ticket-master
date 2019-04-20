import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Tickets from './components/tickets';

const AppRouter = () => (
  <Router>
    <div>
        <Tickets />  
    </div>
  </Router>
)

export default AppRouter;