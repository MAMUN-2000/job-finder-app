import { useState } from "react";
import { useDispatch } from "react-redux";
import Search from "../form/Search";
import * as actions from "../../features/jobs/jobsSlice";

function AllJobsHeader() {
  const [sortValue, setSortValue] = useState("");
  const dispatch = useDispatch();

  const handleSort = () => {
    if (sortValue === "hightolow") {
      dispatch(actions.highToLow());
    } else if (sortValue === "lowtohigh") {
      dispatch(actions.lowToHigh());
    } else {
      dispatch(actions.fetchJobs());
    }
  };

  return (
    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
      <h1 className="lws-section-title">All Available Jobs</h1>
      <div className="flex gap-4">
        <Search />
        <select
          id="lws-sort"
          name="sort"
          autoComplete="sort"
          className="flex-1"
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
          onClick={handleSort}
        >
          <option>Default</option>
          <option value="lowtohigh">Salary (Low to High)</option>
          <option value="hightolow">Salary (High to Low)</option>
        </select>
      </div>
    </div>
  );
}

export default AllJobsHeader;
