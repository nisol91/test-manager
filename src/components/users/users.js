import React, { Component } from "react";
import { translate } from "react-i18next";
import "./users.scss";
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

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "users",
      dataLoaded: false,
      fetchedData: [],
      loadSearchBar: false
    };
  }

  async fetchData() {
    axios
      // .get("http://parmi.softwarehouseparma.it/api/fetchedData")
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then(response => {
        // handle success
        console.log(response);
        this.setState({
          dataLoaded: true,
          fetchedData: response.data.data,
          loadSearchBar: true
        });
        this.handleLoading();
      })
      .catch(function(error) {
        console.log(error);
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
        {this.state.loadSearchBar ? (
          <TopSearch
            title={this.state.title}
            fetchedData={this.state.fetchedData}
          ></TopSearch>
        ) : null}
        <div className="tableBox">
          {this.state.dataLoaded === false ? (
            <div className="spinnerBox">
              <Spinner color="" className="spinner" />
            </div>
          ) : (
            this.state.fetchedData.map((element, index) => (
              <React.Fragment key={index}>
                {
                  <div key={index} className="singleRow">
                    <h1 className="rowTextElement">{element.employee_name}</h1>
                    <h1 className="rowTextElement">
                      {element.employee_salary}
                    </h1>
                    <h1 className="rowTextElement">{element.employee_age}</h1>
                  </div>
                }
              </React.Fragment>
            ))
          )}
        </div>
      </div>
    );
  }
}
export default translate()(Users);
