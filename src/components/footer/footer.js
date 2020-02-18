import React, { Component } from "react";

import "./footer.scss";
import { translate } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faFacebookF } from "@fortawesome/free-brands-svg-icons";
class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}
  render() {
    const { t } = this.props;

    return (
      <div className="footer">
        <div className="iconsContainer">
          <h5 className="footerText">App made with</h5>
          <FontAwesomeIcon icon={faReact} className="reactIcon" />
          <h5 className="footerText">and Symfony</h5>
        </div>
        <div className="iconsContainer">
          <h5 className="footerText">Brewed by</h5>
          <a
            className="nsLink"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            parmì
          </a>
        </div>
      </div>
    );
  }
}
// export default Contact;
export default translate()(Footer);
