import React, { Component } from "react";
import { translate } from "react-i18next";
import "./categories.scss";
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
import TopSearch from "../topSearch/topSearch";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataLoaded: false,
      fetchedData: []
    };
  }

  async fetchData() {
    axios
      // .get("http://parmi.softwarehouseparma.it/api/fetchedData")
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        // handle success
        console.log(response);
        this.setState({
          dataLoaded: true,
          fetchedData: response.data
        });
        this.handleLoading();
      })
      .catch(function(error) {
        // handle error

        console.log("====================================");
        console.log(error);
        console.log("====================================");
      })
      .finally(function() {
        // always executed
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="elementsBox">
        <TopSearch></TopSearch>

        {this.state.dataLoaded === false ? (
          <div className="spinner">
            <Spinner color="primary" className="" />
          </div>
        ) : (
          this.state.fetchedData.map((element, index) => (
            <React.Fragment key={index}>
              <div key={index} className="singleRow">
                <h1 className="rowTextElement">{element.userId}</h1>
                <h1 className="rowTextElement">{element.id}</h1>
                <h1 className="rowTextElement">{element.title}</h1>
              </div>
            </React.Fragment>
          ))
        )}
      </div>
    );
  }
}
export default translate()(Categories);
