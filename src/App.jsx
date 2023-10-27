import { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import { Users } from "./data";

function App() {
  const [isSearch, setIsSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filterSearch, setFilterSearch] = useState([]);

  return (
    <>
      <Searchbar setSearchInput={setSearchInput} />
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search">
          <g data-name="Layer 2">
            <path
              d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"
              data-name="search"
            ></path>
          </g>
        </svg>
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="home">
        <path d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="mail"
        x="0"
        y="0"
        version="1.1"
        viewBox="0 0 29 29"
        xml:space="preserve"
      >
        <path d="M2 7.42v14.172l7.086-7.086zM3.408 6l8.971 8.971c1.133 1.133 3.109 1.133 4.242 0L25.592 6H3.408z"></path>
        <path d="M18.035 16.385c-.943.944-2.199 1.465-3.535 1.465s-2.592-.521-3.535-1.465l-.465-.465L3.42 23h22.16l-7.08-7.08-.465.465zM19.914 14.506L27 21.592V7.42z"></path>
      </svg>
      {searchInput.length === 0 ? <></> : <div></div>}
    </>
  );
}

export default App;
