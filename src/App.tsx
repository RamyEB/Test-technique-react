import React from 'react';
 import NavBar from './navbar';
//  import Layout from './layout';
 import Home from './pages/Home';
 import NotFound from './pages/NotFound';
 import Todos from './pages/Todos'

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = (): JSX.Element => (

  <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/Home" >
            <Home />
          </Route>
          <Route exact path="/todos">
            <Todos/>
          </Route>
          <Route component={NotFound} />
        </Switch>
    </Router>
);

export default App;
