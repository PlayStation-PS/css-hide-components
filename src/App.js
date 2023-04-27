import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
// import "~bootstrap/scss/bootstrap";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <div>
              <h1>hallo</h1>
            </div>
          </Col>
          <Col>
            <div className="example">
              <Card>
                <Card.Title>testing</Card.Title>
                <Card.Body>tester</Card.Body>
                <Card.Footer>test</Card.Footer>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
