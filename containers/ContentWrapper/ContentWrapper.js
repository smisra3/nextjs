import { connect } from "react-redux";
import React, { Component } from "react";

class ContentWrapper extends Component {
  render() {
    return <div>This is ContentWrapper</div>;
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(ContentWrapper);
