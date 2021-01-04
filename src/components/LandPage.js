import React from 'react';
import Navbar from './Navbar'
import Product from "./Product";
import {createMuiTheme } from "@material-ui/core/styles";

const themeLightGreen = createMuiTheme({
  palette: {
    background: {
      default: "#fff"
    }

  }
});

function LandPage(props) {
    return (
        <div theme={themeLightGreen}>
        <Navbar />
        <Product />
      </div>
    );
}

export default LandPage;