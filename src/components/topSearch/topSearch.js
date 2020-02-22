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
      title: "",
      fetchFromFather: [],
      searchVal: "",
      matchResultSearch: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  fetchFromFather() {
    this.setState({
      fetchFromFather: this.props.fetchedData
    });
    setTimeout(() => {
      console.log("=============fetch from parent=======================");
      console.log(this.state.fetchFromFather);
      console.log("=============fetch from parent=======================");
    }, 200);
  }
  handleChange(event) {
    this.setState({ searchVal: event.target.value });
    setTimeout(() => {
      console.log(this.state.searchVal);
    }, 20);
  }

  handleSubmit(event) {
    console.log("Hai cercato: " + this.state.searchVal);
    event.preventDefault();
    // this.state.fetchFromFather.forEach(val => console.log(val.id));
    var array = [];
    this.state.fetchFromFather.forEach(val => {
      if (val.employee_name === this.state.searchVal) {
        array.push(val);
      }
    });
    // this.setState({ searchVal: event.target.value });
    console.log(array);

    //TODO
    // quando trovo il mio nome, aggiorno lo stato del componente padre.
  }
  componentDidMount() {
    this.fetchFromFather();
  }

  render() {
    return (
      <div className="topSearch">
        <div className="tableTitle">{this.props.title}</div>
        <form onSubmit={this.handleSubmit}>
          <label className="tableSearchBar">
            <input
              type="text"
              name="nome"
              className="inputField"
              value={this.state.searchVal}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" className="submitBtn" />
          </label>
        </form>
      </div>
    );
  }
}
export default translate()(TopSearch);
