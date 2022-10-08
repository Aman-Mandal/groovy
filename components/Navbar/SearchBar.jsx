import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ placeholder, data }) {
  const [filterSongs, setFilterSongs] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  function handleFilter(event) {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((item) => 
       item.title.toLowerCase().startsWith(searchWord.toLowerCase())
    );

    if (searchWord === "") {
      setFilterSongs([]);
    } else {
      setFilterSongs(newFilter);
    }
  }

  return (
    <>
      <div className="w-60">
        <form className="search w-full">
          <div className="w-full flex items-center justify-start ">
            <input
              className="outline-none w-full border-none text-gray-300 placeholder-gray-300 bg-transparent"
              type="text"
              placeholder={placeholder}
              onChange={handleFilter}
              value={wordEntered}
            />
            <SearchIcon
              className="text-gray-300 cursor-pointer"
              fontSize="small"
            />
          </div>
        </form>
      </div>
      {filterSongs?.length != 0 && (
        <ul className="dataItems bg-white absolute top-[2.5rem] left-0 w-full">
          {filterSongs.slice(0, 15).map((item, key) => {
            return (
              <li href={item.artist} key={key} className="text-gray-800">
                {item.title}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default SearchBar;
