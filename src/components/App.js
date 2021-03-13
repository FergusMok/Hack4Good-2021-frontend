import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import ProfilePage from "./ProfilePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/" exact component={SearchBar} />
          <Route path="/profile" exact component={ProfilePage} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
