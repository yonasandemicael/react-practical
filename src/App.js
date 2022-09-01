import React, { useState } from "react";
import ItemList from "./components/ItemList";

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
  const initialData = getItems();
  const [data, setData] = useState(initialData);

  return (
    <>
      <ItemList data={data} />
    </>
  );
}

export default App;
