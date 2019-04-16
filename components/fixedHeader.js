import React from "react";
import strings from "../language/strings";
import styled from "styled-components";
import { Flex, Box, Text, Image } from "rebass";

const Header = styled(Box)`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  transform: translate(0, ${props => (props.isHide ? "0" : "-100%")});
  transition: transform 0.5s ease;
`;

class FixedHeader extends React.Component {
  state = { isHide: false };
  constructor() {
    super();
  }
  hideHeader = () => {
    const { isHide } = this.state;

    const top =
      (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);

    top > 100
      ? !isHide && this.setState({ isHide: true })
      : isHide && this.setState({ isHide: false });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.hideHeader);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.hideHeader);
  }

  render() {
    return <Header isHide={this.state.isHide}>{this.props.children}</Header>;
  }
}

export default FixedHeader;
