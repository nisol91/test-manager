import React, { Component } from "react";
import { translate } from "react-i18next";
import "./main.scss";
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

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersLoaded: false,
      users: []
    };
    this.handleLoading = this.handleLoading.bind(this);
  }

  handleLoading() {
    this.setState({
      usersLoaded: true
    });
    setTimeout(() => {
      console.log(this.state.usersLoaded);
      console.log(this.state.users);
    }, 20);

    console.log("====================================");
    console.log("====================================");
  }

  async fetchUsers() {
    axios
      // .get("http://parmi.softwarehouseparma.it/api/users")
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then(response => {
        // handle success
        console.log(response);
        this.setState({
          users: response.data.data
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
    this.fetchUsers();
  }

  render() {
    return (
      <div className="mainBox">
        {this.state.users.map((user, index) => (
          <React.Fragment key={index}>
            <div key={index} className="">
              <h1 className="">{user.employee_name}</h1>
              <h1 className="">{user.employee_salary}</h1>
              <h1 className="">{user.employee_age}</h1>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  }
}
export default translate()(Main);
