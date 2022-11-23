import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./common/Header";
import CardList from "./home/CardList";
import User from "./user/User";
import NotFound from "./common/NotFound";

function App() {
  /*
    TODO: There is no need to add a <Router >, it is in index.js.

    The <CardList /> component should be shown when the user is on the index path.
    //done

    The <User /> component should be shown when the user is on the following path:
    /users/:userId
    //done

    Display <NotFound /> when appropriate
    //done
  */
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact={true} path="/">
          <CardList />
        </Route>
        <Route path="/users/:userId">
          <User />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
