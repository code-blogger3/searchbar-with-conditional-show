import { useEffect, useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import { Users } from "./data";
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";

function App() {
  const [isSearch, setIsSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);

  const handleSearch = () => {
    if (searchInput !== "") {
      let searched = Users.filter((user) => {
        return Object.values(user)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });

      setFilteredSearch(searched);
    }
  };

  useEffect(() => {
    let debounced = setTimeout(() => {
      handleSearch();
    }, 200);

    return () => clearTimeout(debounced);
  }, [searchInput]);

  return (
    <>
      {isSearch ? (
        <Searchbar setSearchInput={setSearchInput} setIsSearch={setIsSearch} />
      ) : (
        <div className="react-icons">
          <AiOutlineSearch
            size={30}
            className="react-icon"
            onClick={() => setIsSearch(true)}
          />
          <AiOutlineHome size={30} />
          <AiOutlineUserSwitch size={30} />
          <AiOutlineMessage size={30} className="react-icon" />
          <AiOutlineBell size={30} className="react-icon" />
        </div>
      )}

      {searchInput.length === 0 ? (
        <></>
      ) : (
        <div>
          {
            <div className="search-results">
              {filteredSearch.length === 0 ? (
                <div className="search-inner">No Results Found..</div>
              ) : (
                filteredSearch.map((user) => (
                  <div>
                    <p className="name">{user.name}</p>
                  </div>
                ))
              )}
            </div>
          }
        </div>
      )}
    </>
  );
}

export default App;
