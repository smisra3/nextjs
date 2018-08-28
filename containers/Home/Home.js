import { connect } from "react-redux";
import React, { Component } from "react";

import styles from "./styles";
import AppCarousel from "../../components/AppCarousel";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <AppCarousel />
        {styles}
      </div>
    );
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(Home);
