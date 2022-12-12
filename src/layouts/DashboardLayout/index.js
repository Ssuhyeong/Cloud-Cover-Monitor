import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import NavBar from "./NavBar";

let Root = styled.div({
  backgroundColor: "#F8F8FA",
  overflowY: "hidden",
  height: "100%",
  width: "100%",
});
let Wrapper = styled.div({
  display: "flex",
  flex: "1 1 auto",
  paddingLeft: 250,
});
let ContentContainer = styled.div({
  display: "flex",
  flex: "1 1 auto",
});
let Content = styled.div({
  flex: "1 1 auto",
  width: "100%",
  height: "100%",
  maxWidth: "1591px",
  minHeight: 903,
  paddingTop: 40,
  paddingLeft: 40,
  paddingRight: 40,
  paddingBottom: 34,
});

const DashboardLayout = ({ children }) => {
  return (
    <Root>
      <NavBar />
      <Wrapper>
        <ContentContainer>
          <Content>{children}</Content>
        </ContentContainer>
      </Wrapper>
    </Root>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

export default DashboardLayout;
