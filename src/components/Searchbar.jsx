import { AiOutlineCloseCircle } from "react-icons/ai";

function Searchbar({ setSearchInput, setIsSearch }) {
  return (
    <div>
      <input
        placeholder="Search Users.."
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <AiOutlineCloseCircle
        className="close-icon"
        size={20}
        onClick={() => {
          setIsSearch(false);
          setSearchInput("");
        }}
      />
    </div>
  );
}

export default Searchbar;
