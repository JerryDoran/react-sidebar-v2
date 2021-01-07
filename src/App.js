import React from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import Overview from "./pages/Overview";
import Users from "./pages/Users";
import Revenue from "./pages/Revenue";
import Reports from "./pages/Reports";
import ReportOne from "./pages/ReportOne";
import ReportTwo from "./pages/ReportTwo";
import ReportThree from "./pages/ReportThree";
import Products from "./pages/Products";
import Team from "./pages/Team";
import Messages from "./pages/Messages";

export default function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/overview" component={Overview} />
          <Route exact path="/overview/users" component={Users} />
          <Route exact path="/overview/revenue" component={Revenue} />
          <Route exact path="/reports" component={Reports} />
          <Route exact path="/reports/report-one" component={ReportOne} />
          <Route exact path="/reports/report-two" component={ReportTwo} />
          <Route exact path="/reports/report-three" component={ReportThree} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/messages" component={Messages} />
        </Switch>
      </Router>
    </>
  );
}
