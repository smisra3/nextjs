import { connect } from "react-redux";
import React, { Component } from "react";

import styles from "./styles";
import LinkItems from "../../components/LinkItems";
import config from "../../constants/config";

class Footer extends Component {
  render() {
    return (
      <footer className="">
        <LinkItems items={config.footerLinks} />
        {styles}
      </footer>
    );
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(Footer);
