import { Provider } from "react-redux";
import fetch from "isomorphic-unfetch";
import React from "react";

import store from "../store";
import App from "../containers/App";

class Index extends React.Component {
  static async getInitialProps() {
    const response = await fetch("http://10.207.222.38:3200/api/CommonData");
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return { jsonResponse };
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Index;
