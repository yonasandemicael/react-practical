import React, { useContext } from "react";
import ItemList from "./ItemList";
import { GlobalContext } from "../GlobalState";

export default function Search() {
  const { data } = useContext(GlobalContext);
  const [search, setSearch] = React.useState("");
  const [searchedItems, setSearchedItems] = React.useState([]);
  const [isSearchEmpty, setIsSearchEmpty] = React.useState(true);
  const handleChange = (event) => {
    const search = event.target[0].value;
    setSearch(search);
    if (search === "") isSearchEmpty = true;
    setIsSearchEmpty(false);
  };
  for (let item of data) {
    if (item.title.inculdes(search) || item.description.inculdes(search)) {
      searchedItems.push(item);
    }
  }

  return (
    <div>
      <input
        name="serach"
        value={search}
        onChange={(e) => this.handleChange(e)}
      />
      {this.state.isSearchEmpty ? (
        <ItemList data={data} />
      ) : (
        <ItemList data={searchedItems} />
      )}
    </div>
  );
}
