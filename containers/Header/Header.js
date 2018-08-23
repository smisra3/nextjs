import { connect } from "react-redux";
import React, { Component } from "react";

class Header extends Component {
  render() {
    return <header>This is header</header>;
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(Header);
