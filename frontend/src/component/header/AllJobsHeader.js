import Search from "../form/Search";

function AllJobsHeader() {
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
        >
          <option>Default</option>
          <option>Salary (Low to High)</option>
          <option>Salary (High to Low)</option>
        </select>
      </div>
    </div>
  );
}

export default AllJobsHeader;
