import AllJobsHeader from "../header/AllJobsHeader";
import AllJobItem from "./AllJobItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchJobs } from "../../features/jobs/jobsSlice";
import Error from "../ui/Error";
import Loading from "../ui/Loading";

function AllJobList() {
  const dispatch = useDispatch();
  const { isLoading, isError, errorMsg, jobs } = useSelector((s) => s.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // decide what to render
  let element;

  if (isLoading) {
    element = <Loading />;
  }

  if (isError) {
    element = <Error msg={errorMsg} />;
  }
  if (!isLoading && !isError && jobs.length === 0) {
    element = <h1 className="text-center">No Jobs Found !</h1>;
  }
  if (!isLoading && !isError && jobs.length > 0) {
    element = jobs.map((job) => <AllJobItem key={job.id} {...job} />);
  }

  return (
    <div className="lg:pl-[14rem]  mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <AllJobsHeader />
        {element}
      </main>
    </div>
  );
}

export default AllJobList;
