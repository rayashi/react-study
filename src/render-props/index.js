import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UsersList from "./UserList";
import UserDetail from "./UserDetail";

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <UsersList />
        </Route>
        <Route exact path="/users/:id">
          <UserDetail />
        </Route>
      </Switch>
    </Router>
  );
};
