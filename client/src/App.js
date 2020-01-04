import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer";
import Home from "./pages/home";
import Main from "./pages/main";

function App() {
  const wrapper = () => {   
    if(localStorage.jwtToken){
      return (
        <Route path="/main" component={Main} />
      )
    } else {
      return <Redirect to="/" />
    }
  }
  return (    
      <Router>
        <div className="App">
          <Router>
            <Switch>             
              <Route path="/main" component={wrapper} />
              <Route path="/" component={Home}/>               
            </Switch>
            <Footer />
          </Router>
        </div>
      </Router>

  );
}

export default App;
