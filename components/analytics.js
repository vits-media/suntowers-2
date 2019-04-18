import ReactGA from "react-ga";
import React from "react";

class Analytics extends React.Component {
  state = {
    inBrowser: false
  };

  componentDidMount() {
    this.setState({ inBrowser: true });
  }

  render() {
    if (this.state.inBrowser) {
      ReactGA.initialize("UA-42375863-3");
      // This just needs to be called once since we have no routes in this case.
      ReactGA.pageview(window.location.pathname);
    }

    return <>{this.props.children}</>;
  }
}

export default Analytics;
