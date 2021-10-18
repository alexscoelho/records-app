import React from "react";
import { BandsList } from "./BandsList";
import { RecordsList } from "./RecordsList";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "./Navbar";

export const Routes = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/records'>
            <RecordsList />
          </Route>
          <Route path='/bands'>
            <BandsList />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
