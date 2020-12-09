import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Vehicle from "./pages/Vehicle";
import Register from "./pages/Register";
import LetsGo from "./pages/LetsGo";
import Profile from "./pages/Profile";
import { CurrentUserProvider, useUserContext } from "./utils/UserContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [user] = useUserContext();
  return <Route {...rest} component={user.firstName ? Component : Login} />;
};

export default () => (
  <Router basename={process.env.PUBLIC_URL + "/"}>
    <CurrentUserProvider>
      <Switch>
        <Route exact path="/" component={LandingPage} />S
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path="/vehicle" component={Vehicle} />
        <ProtectedRoute exact path="/letsgo" component={LetsGo} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </CurrentUserProvider>
  </Router>
);
