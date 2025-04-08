//PageLayout.tsx
import { Col, Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import NavBarButtons from "../components/NavBarButtons";
import React, { useState } from 'react';


type PageLayoutProps = {
  children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Col>
      <NavBar />
      </Col>
      <h1>My App</h1>
      {children}
      <footer>
        <NavBarButtons />
      </footer>
    </Container>
  );
};

export default PageLayout;