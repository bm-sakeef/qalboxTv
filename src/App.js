import React from "react";

// Pages
import Home from "./views/home";
import Videos from "./views/videos";
import VideoPlayer from "./views/videoPlayer";
import Spinners from "./views/spinners";
import About from "./views/about";
import Exit from "./views/exit";

// Modules
import SpatialNavigation from "react-js-spatial-navigation";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

// Components
import Sidebar from "./components/sidebar";

// Css
import "./App.css";

function App(props) {
  if (!props.isLeaving) {
    return (
      <Router basename="/">
        <SpatialNavigation />
        <Sidebar />
        <Switch>
        <Route component={VideoPlayer} path="/videos/player"></Route>
          <Route component={Videos} path="/videos"></Route>
          <Route component={Spinners} path="/spinners"></Route>
            <Route component={About} path="/about"></Route>
          <Route component={Home} path="/"></Route>
        </Switch>
      </Router>
    );
  } else {
    return (
      <>
        <SpatialNavigation />
        <Exit />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLeaving: state.app.isLeaving,
  };
};

export default connect(mapStateToProps, null)(App);
