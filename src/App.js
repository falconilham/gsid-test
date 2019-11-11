import React from 'react';
import HomeContainer from './container/HomeContainer';
import ArticleContainer from './container/ArticleContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div id="app" className="container">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/article/:param" component={ArticleContainer} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
