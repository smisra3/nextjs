import { Provider } from "react-redux";
import fetch from "isomorphic-unfetch";

import store from "../store";
import App from "../containers/App";

const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

Index.getInitialProps = async () => {
  const response = await fetch("http://10.207.222.38:3200/api/CommonData");
  return { response };
};

export default Index;
