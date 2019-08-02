import React, { Component, Fragment } from "react";
import { ToastContainer } from 'react-toastify';
import Routes from "./routes";

import GlobalStyle from './styles/global';

class App extends Component {
  render () {
    return (
      <Fragment>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Fragment>
    )
  }
}

export default App;

