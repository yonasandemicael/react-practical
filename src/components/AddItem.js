import React, { useState, useContext } from "react";
import { GlobalContext } from "../GlobalState";

export default function AddItem() {
  const { addItem } = useContext(GlobalContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState([]);
  const handlechange = (event) => {
    event.preventDefault();
    // to get the form values either use the instance of FormDta or us the bracket notation pass the inde xparameter

    var data = new FormData(event.target);
    let formObject = Object.fromEntries(data.entries());
    console.log(formObject.title);
    // using square notation
    console.log(event.target[0].value);
    addItem(formObject);
  };

  return (
    <>
      <form action="" onSubmit={handlechange}>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="imageUrl"
          name="imageUrl"
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="tags"
          name="tags"
          onChange={(e) => setTags(e.target.value)}
        />
        <button type="submit">Add item</button>
      </form>
    </>
  );
}
