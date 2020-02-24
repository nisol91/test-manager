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
import { BrowserRouter as Router, Route } from "react-router-dom";
import Users from "../users/users";
import Categories from "../categories/categories";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersLoaded: false,
      users: []
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="mainBox">
        <Router>
          <div className="navigation">
            <Link className="navigationElement" to="/users">
              Users
            </Link>
            <Link className="navigationElement" to="/categories">
              Categories
            </Link>
          </div>
          <div className="routerContainer">
            <Route exact path="/users" component={Users} />
            <Route exact path="/categories" component={Categories} />
          </div>
        </Router>
      </div>
    );
  }
}
export default translate()(Main);
