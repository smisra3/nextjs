import { connect } from "react-redux";
import React, { Component } from "react";
import PropTypes from "prop-types";

import LinkItems from "../../components/LinkItems";
import styles from "./styles";
import config from "../../constants/config";

class Header extends Component {
  render() {
    return (
      <header className="">
        <LinkItems items={config.navItems} className={""} />
        {styles}
      </header>
    );
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(Header);
