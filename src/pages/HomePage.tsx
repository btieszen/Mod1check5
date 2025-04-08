//Home-page.tsx
import { Col, Container } from "react-bootstrap";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Col>
        <h1>Log In for Your Todo App</h1>
        <LoginButton />
        <LogoutButton />
      </Col>
    </Container>
  );
};

export default HomePage;