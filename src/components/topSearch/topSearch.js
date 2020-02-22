import React, { Component } from "react";
import { translate } from "react-i18next";
import "./topSearch.scss";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import { db } from "../portfolio_single_page/portfolio_sp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faArrowAltCircleLeft,
  faWindowClose
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

class TopSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchedData: [],
      title: ""
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="topSearch">
        <div className="tableTitle">titolo</div>
        <div className="tableSearchBar">barra di ricerca</div>
      </div>
    );
  }
}
export default translate()(TopSearch);
