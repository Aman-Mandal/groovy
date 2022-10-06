import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ placeholder, data }) {
  const [filterSongs, setFilterSongs] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  function handleFilter(event) {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((item) => {
      return item.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilterSongs([]);
    } else {
      setFilterSongs(newFilter);
    }
  }

  return (
    <div>
      <form className="search">
        <div>
          <input
            className="outline-none  border-none text-gray-300 placeholder-gray-300 bg-transparent"
            type="text"
            placeholder={placeholder}
            onChange={handleFilter}
            value={wordEntered}
          />
          <SearchIcon className="text-gray-300" fontSize="small" />
        </div>

        {filterSongs?.length != 0 && (
          <div className="dataItems">
            {filterSongs.slice(0, 15).map((item, key) => {
              return (
                <a href={item.artist} className="text-gray-300">
                  <p>{item.title}</p>
                </a>
              );
            })}
          </div>
        )}
      </form>
    </div>
  );
}

export default SearchBar;
