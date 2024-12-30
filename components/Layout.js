import React from "react";
import { Container } from "semantic-ui-react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div>
      {/* use this https://react.semantic-ui.com/layouts/fixed-menu/# */}
      <Container>
        <Header />
        {props.children}
      </Container>
    </div>
  );
};
export default Layout;
