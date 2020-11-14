import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";
import Login from './pages/Login';
import Vehicle from './pages/Vehicle';
import Register from './pages/Register';
import LetsGo from './pages/LetsGo';
import Profile from './pages/Profile';
import Results from './pages/Results';

class App extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL + "/"}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/vehicle" component={Vehicle} />
          <Route exact path="/letsgo" component={LetsGo} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/results" component={Results} />
        </Switch>
      </Router>
    );
  }
}

export default App;
