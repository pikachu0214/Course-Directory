import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//App components
import Header from "./Header";
import Home from "./Home.js";
import About from "./About.js";
import Teachers from "./Teachers.js";
import Courses from "./Courses.js";
import NotFound from "./NotFound";
import Featured from  "./Featured";
import Info from "./Info";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        {/* Switch component will go through each match url if found*/}
        <Route path="/" component={Home} exact />

        {/* {<About title="About Page" />} ? "this is used with props" : component={About}*/}
        <Route exact path="/about" render={() => <About title="About Page" />} />
        <Route path="/about/:us" component={Info} />
        <Route exact path="/teachers" component={Teachers} />
        <Route path="/teachers/:topic/:name" component={Featured} />
        <Route path="/courses" component={Courses} />
        <Route component={NotFound} />
      </Switch>{" "}
      {/* if not found, will render NotFound component*/}
    </div>
  </BrowserRouter>
);

export default App;
