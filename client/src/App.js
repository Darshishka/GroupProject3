import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer";
import Home from "./pages/home";
import Profile from "./pages/profile"
import Main from "./pages/main";
import jwt_decode from "jwt-decode";

function App() {
  const wrapper = () => {   
    const currentTime = Date.now();
    if(localStorage.jwtToken){
      const decoded = jwt_decode(localStorage.jwtToken);
      if(decoded.exp < currentTime){
        return (
          <>
            <Route path="/main" component={Main} />
            <Route path="/profile" component={Profile}/>
          </>
        )
      } 
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
              <Route path="/profile" component={wrapper} />
              <Route path="/" component={Home}/>               
            </Switch>
            <Footer />
          </Router>
        </div>
      </Router>

  );
}

export default App;
