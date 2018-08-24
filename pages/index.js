import { Provider } from "react-redux";

import store from "../store";
import App from "../containers/App";

const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Index;
