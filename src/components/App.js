import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import ProfilePage from "./ProfilePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/profile/:username" exact component={ProfilePage} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
