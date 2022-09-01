import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Item({ data }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="data.imageUrl" />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}
