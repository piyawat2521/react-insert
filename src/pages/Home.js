import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

function Home() {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [linkimg, setLinkimg] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/game/insert", {
        id: 0,
        name: name,
        detail: detail,
        price: price,
        img: linkimg,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container style={{ marginTop: "5rem" }}>
      <Row>
        <Col>
          <h1>Home</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Detail</Form.Label>
              <Form.Control
                type="text"
                placeholder="Detail"
                onChange={(event) => {
                  setDetail(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Price"
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Link Img</Form.Label>
              <Form.Control
                type="text"
                placeholder="Link Img"
                onChange={(event) => {
                  setLinkimg(event.target.value);
                }}
              />
            </Form.Group>

            <Button variant="primary" type="button" onClick={handleClick}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
