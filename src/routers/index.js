import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Project from '../pages/Project';

export default function Routers() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/project" component={Projects} />
      <Route exact path="/project/:name" component={Project} />
    </Switch>
  );
}
