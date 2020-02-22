import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/main/main";
import Users from "./components/users/users";

import Project from "./components/project/project";
import Footer from "./components/footer/footer";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { translate } from "react-i18next";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      splashScreen: true,
      hideSplash: false
    };
  }
  componentDidMount() {
    this.splash();
  }
  splash() {
    setTimeout(() => {
      this.setState({ splashScreen: false });
    }, 1500);
    setTimeout(() => {
      this.setState({ hideSplash: true });
    }, 3000);
  }

  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <Router>
          <div className="outerBox">
            <div className="innerBox" onClick={this.hideNav}>
              {!this.state.hideSplash ? (
                <div
                  className={`splashScreen  ${this.state.splashScreen ===
                    false && "fade-out-splash"}`}
                >
                  <div className="splashImg pulseit" />
                </div>
              ) : null}
              <Route exact path="" component={Main} />
              <Route exact path="/project/:projID" component={Project} />
              <Footer></Footer>
            </div>
          </div>
        </Router>
      </I18nextProvider>
    );
  }
}

export default translate("common")(App);

//qui dentro si trovano la navbar e il router con le transizioni
