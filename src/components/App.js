import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import NotFound from "./NotFound";
import Search from "./Search";
import history from "../utils/history";

class App extends React.Component {
  render() {
    return (
      // <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/search" component={Search}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
