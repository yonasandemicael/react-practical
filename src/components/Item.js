import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import Edit from "./Edit";
import { GlobalContext } from "../GlobalState";

export default function Item({ data }) {
  const { deleteItem } = useContext(GlobalContext);
  const itemDelete = (id) => {
    deleteItem(id);
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={data.imageUrl}
        style={{ width: 180, height: 100 }}
      />
      <Card.Body>
        <Card.Title>{data.id}</Card.Title>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
      </Card.Body>
      <Edit>Edit</Edit>
      <button onClick={() => itemDelete(data.id)}>Delete</button>
    </Card>
  );
}
