import { Provider } from "react-redux";
import fetch from "isomorphic-unfetch";

import store from "../store";
import App from "../containers/App";

const cart = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default cart;
