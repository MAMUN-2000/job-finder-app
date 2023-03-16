import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as fetches from "../../features/jobs/jobsSlice";
function Sidebar() {
  const dispatch = useDispatch();

  const renderOnType = (type) => {
    dispatch(fetches.filterJobType({ type }));
  };
  const renderAllJobs = () => {
    dispatch(fetches.fetchJobs());
  };

  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to={"/"}
              onClick={renderAllJobs}
              className="main-menu menu-active"
              id="lws-alljobs-menu"
            >
              <i className="fa-solid fa-briefcase"></i>
              <span> All Available Jobs</span>
            </Link>
            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <Link
                  className="sub-menu"
                  to={"/"}
                  id="lws-internship-menu"
                  onClick={() => renderOnType("Internship")}
                >
                  <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                  Internship
                </Link>
              </li>
              <li>
                <Link
                  className="sub-menu"
                  to={"/"}
                  id="lws-fulltime-menu"
                  onClick={() => renderOnType("Full Time")}
                >
                  <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                  Full Time
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => renderOnType("Remote")}
                  className="sub-menu"
                  to={"/"}
                  id="lws-remote-menu"
                >
                  <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                  Remote
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/add-job" className="main-menu" id="lws-addJob-menu">
              <i className="fa-solid fa-file-circle-plus"></i>
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
