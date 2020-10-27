import React from "react";
import { CardTitle, CardText, Row, Col, Button, Card } from "reactstrap";
import "../App.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Main() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/"+page);
  }

  return (
    <div>
      <h1 className="text-center" style={{ marginTop: "5%" }}>
        Computational Mathematics
      </h1>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="3"></Col>

        <Col sm="6">
          <div className="text-center">
            <Row>
              <Col sm="6">
                <Card style={{backgroundColor: "#FFFACD"}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}><u>บทที่ 1</u></h3>
                  </CardTitle>
                  <CardText>
                    <h4><u>Basic Computing</u></h4>
                  </CardText>
                 
                    <Button onClick={()=>{nextPage("b2s")}} color="warning">
                      <h3 style={{ marginTop: "10px" }}>เริ่ม</h3>
                    </Button>
                  
                </Card>
              </Col>

              <Col sm="6">
                <Card style={{backgroundColor: "#FFFACD"}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}><u>บทที่ 2</u></h3>
                  </CardTitle>
                  <CardText>
                    <h4>Linear Equations</h4>
                  </CardText>
                  <Button onClick={()=>{nextPage("elimination")}} color="warning">
                    <h3 style={{ marginTop: "10px" }}>เริ่ม</h3>
                  </Button>
                </Card>
              </Col>
            </Row>

            <Row className="text-center" style={{ marginTop: "20px" }}>
              <Col sm="6">
                <Card style={{backgroundColor: "#FFFACD"}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}><u>บทที่ 3</u></h3>
                  </CardTitle>
                  <CardText>
                    <h4>Interpolation</h4>
                  </CardText>
                  <Button onClick={()=>{nextPage("interpolation")}} color="warning">
                    <h3 style={{ marginTop: "10px" }}>เริ่ม</h3>
                  </Button>
                </Card>
              </Col>

              <Col sm="6">
                <Card style={{backgroundColor: "#FFFACD"}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}><u>บทที่ 4</u></h3>
                  </CardTitle>
                  <CardText>
                    <h4>Differentiation</h4>
                  </CardText>
                  <Button onClick={()=>{nextPage("differentiation")}} color="warning">
                    <h3 style={{ marginTop: "10px" }}>เริ่ม</h3>
                  </Button>
                </Card>
              </Col>
            </Row>


            <Row className="text-center" style={{ marginTop: "20px" }}>
              <Col sm="6">
                <Card style={{backgroundColor: "#FFFACD"}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}><u>บทที่ 5</u></h3>
                  </CardTitle>
                  <CardText>
                    <h4>Integration</h4>
                  </CardText>
                  <Button onClick={()=>{nextPage("integration")}} color="warning">
                    <h3 style={{ marginTop: "10px" }}>เริ่ม</h3>
                  </Button>
                </Card>
              </Col>

              <Col sm="6">
                <Card style={{backgroundColor: "#FFFACD"}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}><u>บทที่ 6</u></h3>
                  </CardTitle>
                  <CardText>
                    <h4>Root-finding</h4>
                  </CardText>
                  <Button onClick={()=>{nextPage("root-finding")}} color="warning">
                    <h3 style={{ marginTop: "10px" }}>เริ่ม</h3>
                  </Button>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm="3"></Col>
      </Row>
    </div>
  );
}

export default Main;
