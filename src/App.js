import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Return from './components/Return';
import Init from './components/Init';
import Closed from './components/Closed';
import NavigationBar from './components/NavigationBar';
import Layout from './components/Layout';
import JumbSearch from './components/JumbSearch';

import "./index.css";

function App() {
  return (
    <React.Fragment>

      <BrowserRouter>
        <NavigationBar />
        <JumbSearch />
        <Layout>
          <Switch>
            <Route exact path="/" component={Init} />
            <Route path="/Return" component={Return} />
            <Route path="/Closed" component={Closed} />
          </Switch>

        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
}


export default App;