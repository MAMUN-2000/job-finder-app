import { useState } from "react";
import * as fetches from "../../features/jobs/jobsSlice";
import { useDispatch } from "react-redux";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(fetches.filterJobType({ search: searchValue }));
    setSearchValue("");
  };

  return (
    <div className="search-field group flex-1">
      <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Search Job"
          className="search-input"
          id="lws-searchJob"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
