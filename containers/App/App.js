import Header from "../Header";
import ContentWrapper from "../ContentWrapper";
import Footer from "../Footer";
import Head from "../../components/Head";
import styles from "./styles";

const App = () => (
  <div className="app">
    <Head />
    <Header />
    <ContentWrapper />
    <Footer />
    {styles}
  </div>
);

export default App;
