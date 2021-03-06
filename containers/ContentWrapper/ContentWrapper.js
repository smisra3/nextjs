import { connect } from "react-redux";
import React, { Component } from "react";

import styles from "./styles";
import AppCarousel from "../../components/AppCarousel";
import ProductCard from "../../components/ProductCard";

class ContentWrapper extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <AppCarousel />
        <ProductCard />
        {styles}
      </div>
    );
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(ContentWrapper);
