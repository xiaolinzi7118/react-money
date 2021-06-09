import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Details from "views/Details";
import Money from "views/Money";
import NotFound from "views/NotFound";
import ReportForms from "views/ReportForms";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/money">
          <Money />
        </Route>
        <Route exact path="/details">
          <Details />
        </Route>
        <Route exact path="/reportForms">
          <ReportForms />
        </Route>
        <Redirect exact from="/" to="money" />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
