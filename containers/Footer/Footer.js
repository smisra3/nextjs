import { connect } from "react-redux";
import React, { Component } from "react";

class Footer extends Component {
  render() {
    return <footer>This is footer</footer>;
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(Footer);
