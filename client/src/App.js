import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer";
import Home from "./pages/home";
import Main from "./pages/main";
import { useSelector } from "react-redux";

function App() {
  const loggedIn = useSelector(state => state.login);  
  const wrapper = () => {
    if(!loggedIn){
      return <Redirect to="/" />
    }
    return (
      <Route path="/main" component={Main} />
    )
  }
  return (    
      <Router>
        <div className="App">
          <Router>
            <Switch>
              {/* if having issues switch component={wrapper} to component={Main} */}
              <Route path="/main" component={Main} />
              <Route path="/" component={Home}/>               
            </Switch>
            <Footer />
          </Router>
        </div>
      </Router>

  );
}

export default App;
