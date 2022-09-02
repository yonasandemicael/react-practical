import Item from "./Item";
import React, { useContext } from "react";
import { GlobalContext } from "../GlobalState";

export default function ItemList({ data }) {
  const { searchedItems } = useContext(GlobalContext);
  console.log(data);
  console.log(searchedItems);

  return (
    <>
      {data && data.map((item, index) => <Item data={item} key={index} />)}
      {searchedItems &&
        searchedItems.map((item, index) => <Item data={item} key={index} />)}
    </>
  );
}
