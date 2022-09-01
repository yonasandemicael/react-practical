import React from "react";
import Item from "./Item";

export default function ItemList({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <Item data={item} key={index} />
      ))}
    </>
  );
}
