import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";
import Login from './pages/Login'

class App extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL + "/"}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
