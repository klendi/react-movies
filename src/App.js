import React, { Component } from "react";
import NavBar from "./components/navbar";
import Router from "./routing/router";
import LoadingBar from 'react-top-loading-bar'
import store from "./store";
import { setLoadingBarProgress } from "./actions";
require("dotenv").config();

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loadingBar } = store.getState();
    return (
      <div>
        <LoadingBar
          progress={loadingBar.progress}
          onLoaderFinished={() => store.dispatch(setLoadingBarProgress(0))}
        />
        <NavBar />
        <main className="container">
          <Router />
        </main>
      </div>
    );
  }
}
