import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer";
import NavTab from "./components/navtab";

function App() {
  return (    
      <Router>
        <div className="App">
          <Router>
            <NavTab />
            <Switch>
              
            </Switch>
            <Footer />
          </Router>
        </div>
      </Router>

  );
}

export default App;
