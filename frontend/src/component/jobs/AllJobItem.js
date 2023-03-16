import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as fetches from "../../features/jobs/jobsSlice";
function AllJobItem(data) {
  const { salary, type, deadline, title, id } = data;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const colorOfType = () => {
    if (type === "Internship") {
      return `!text-[#FF5757]`;
    }
    if (type === "Full Time") {
      return `!text-[#FF8A00]`;
    }
    if (type === "Remote") {
      return `!text-[#56E5C4]`;
    }
  };

  const handleDeleteBtn = () => {
    dispatch(fetches.deleteJob(id));
  };
  const handleEdit = () => {
    dispatch(fetches.updateData(data));
    navigate("/edit-job");
  };

  return (
    <div className="jobs-list">
      <div className="lws-single-job">
        <div className="flex-1 min-w-0">
          <h2 className="lws-title">{title}</h2>
          <div className="job-footers">
            <div className="lws-type">
              <i
                className={`fa-solid fa-stop ${colorOfType()} text-lg mr-1.5`}
              ></i>
              {type}
            </div>
            <div className="lws-salary">
              <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
              BDT {salary}
            </div>
            <div className="lws-deadline">
              <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
              Closing on {deadline}
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <button
              onClick={handleEdit}
              type="button"
              className="lws-edit btn btn-primary"
            >
              <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
              Edit
            </button>
          </span>

          <span className="sm:ml-3">
            <button
              onClick={handleDeleteBtn}
              type="button"
              className="lws-delete btn btn-danger "
            >
              <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
              Delete
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AllJobItem;
