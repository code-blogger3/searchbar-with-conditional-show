import { useState } from "react";
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
  const [filterSearch, setFilterSearch] = useState([]);

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
        </div>
      )}

      {searchInput.length === 0 ? <></> : <div></div>}
    </>
  );
}

export default App;
