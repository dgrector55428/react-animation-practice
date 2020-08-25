import React, { useState } from "react";
import "./App.css";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import cardImg from "./images/family-guy-chicken.png";
import { Fade } from "react-reveal";

function App() {
  const [showInfoTab, setShowInfoTab] = useState(false);
  const [chevronClass, setChevronClass] = useState("fas fa-chevron-down");
  const showInfo = () => {
    setShowInfoTab(!showInfoTab);
    chevronClass === "fas fa-chevron-up"
      ? setChevronClass("fas fa-chevron-down")
      : setChevronClass("fas fa-chevron-up");
  };
  return (
    <Container>
      <Row>
        <Col lg="12">
          <Card className="test-card">
            <CardImg top width="50%" src={cardImg} alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>

              {showInfoTab ? (
                <Fade bottom>
                  <CardText style={{ position: "relative", bottom: "10px" }}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </Fade>
              ) : (
                <CardText style={{ position: "relative", bottom: "10px" }}>
                  Contact Info
                </CardText>
              )}
              <Button
                className="expand-btn"
                color="secondary"
                size="sm"
                onClick={showInfo}
              >
                <i
                  className={chevronClass}
                  title="View Project Info"
                  style={{ fontSize: "24px" }}
                ></i>
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
