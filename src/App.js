import React, { useState } from "react";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import { GlobalContext } from "./GlobalState";

function getItems() {
  const items = [
    {
      title: "Alone in the unspoilt wilderness",
      description: "landscape photography of mountain hit by sun rays",
      imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      tags: ["nature"],
    },
    {
      title: "Bridge over a green waterfall",
      description: "gray concrete bridge and waterfalls during daytime",
      imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      tags: ["nature"],
    },
    {
      title: "Body Grassland in Yili\uff0cXinjiang\uff0cChina",
      description: "bird's eye view photograph of green mountains",
      imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      tags: ["nature"],
    },
    {
      title: "Taking The Scenic Route",
      description: "foggy mountain summit",
      imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      tags: ["nature", "landscape", "mountain"],
    },
    {
      title: "Whangarei Falls footbridge",
      description: "blue and brown steel bridge",
      imageUrl: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
      tags: ["nature", "forest", "tree"],
    },
    {
      title: "Beautiful woodland path",
      description: "forest trees",
      imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      tags: ["nature", "forest"],
    },
    {
      title: "El Capitan on a sunny afternoon",
      description:
        "landmark photography of trees near rocky mountain under blue skies daytime",
      imageUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
      tags: ["nature"],
    },
    {
      title: "The Island",
      description: "silhouette of trees near body of water during sunset",
      imageUrl: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9",
      tags: ["nature", "sunset", "beaver dam"],
    },
  ];
  return items;
}

function App() {
  let initialData = getItems();
  initialData = initialData.map((item, index) => {
    return { ...item, id: index };
  });
  const [data, setData] = useState(initialData);
  const [search, setSearch] = React.useState("");
  const [searchedItems, setSearchedItems] = React.useState([]);
  const [isSearchEmpty, setIsSearchEmpty] = React.useState(true);
  const handleChange = (event) => {
    let search = event.target.value;
    setSearch(search);
    if (search === "") isSearchEmpty = true;
    setIsSearchEmpty(false);
    let searchItems = [];
    for (let item of data) {
      console.log(data);
      if (item.title.includes(search) || item.description.includes(search)) {
        console.log(true);
        searchedItems.push(item);
      }
    }
    if (searchedItems.length <= 0) setIsSearchEmpty(true);
    console.log(searchedItems);
    setSearchedItems(searchItems);
  };
  const addItem = (item) => {
    let copy = [...data];
    copy.push(item);
    setData(copy);
  };
  // edit an item
  const editItem = (item) => {
    let copy = [...data];
    let index = copy.find((elem, index) => {
      if (elem.id === item.id) return index;
    });
    copy[index] = item;
    setData(copy);
  };

  const deleteItem = (id) => {
    let items = data.filter((item) => item.id !== id);
    setData(items);
  };

  return (
    <GlobalContext.Provider
      value={{ data, addItem, deleteItem, editItem, searchedItems }}
    >
      <AddItem />
      <input name="serach" value={search} onChange={(e) => handleChange(e)} />
      {isSearchEmpty ? (
        <ItemList data={data} />
      ) : (
        <ItemList data={searchedItems} />
      )}
    </GlobalContext.Provider>
  );
}

export default App;
