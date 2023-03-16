import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as fetches from "../../features/jobs/jobsSlice";
import { useNavigate } from "react-router-dom";
const arr = [
  "Software Developer",
  "Software Engineer",
  "Full Stack Developer",
  "DevOps Engineer",
  "QA Engineer",
  "Product Manager",
  "Social Media Manager",
  "Frontend Engineer",
  "Frontend Developer",
  "IOS App Developer",
  "Android App Developer",
  "Junior Executive",
  "Senior Executive",
  "MERN Stack Developer",
];

function EditForm() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");
  const { updated } = useSelector((s) => s.jobs);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reset = () => {
    setDeadline("");
    setTitle("");
    setType("");
    setSalary("");
  };

  useEffect(() => {
    const { title, salary, deadline, id, type } = updated;

    if (id) {
      setTitle(title);
      setDeadline(deadline);
      setSalary(salary);
      setType(type);
    }
  }, [updated]);

  const handleForm = (e) => {
    e.preventDefault();
    const uId = Date.now().toString() + Math.random().toString().slice(3);
    const data = {
      title,
      type,
      salary,
      deadline,
      id: uId,
    };

    dispatch(fetches.updateJob({ data, id: updated.id }));
    reset();
    navigate("/");
  };

  return (
    <form className="space-y-6" onSubmit={handleForm}>
      <div className="fieldContainer">
        <label
          htmlFor="lws-JobTitle"
          className="text-sm font-medium text-slate-300"
        >
          Job Title
        </label>
        <select
          id="lws-JobTitle"
          name="lwsJobTitle"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        >
          <option value="" hidden defaultValue={""}>
            Select Job
          </option>
          {arr.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobType">Job Type</label>
        <select
          id="lws-JobType"
          name="lwsJobType"
          required
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="" hidden defaultValue={""}>
            Select Job Type
          </option>
          <option value="Full Time"> Full Time</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobSalary">Salary</label>
        <div className="flex border rounded-md shadow-sm border-slate-600">
          <span className="input-tag">BDT</span>
          <input
            type="number"
            name="lwsJobSalary"
            id="lws-JobSalary"
            required
            className="!rounded-l-none !border-0"
            placeholder="20,00,000"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobDeadline">Deadline</label>
        <input
          type="date"
          name="lwsJobDeadline"
          id="lws-JobDeadline"
          required
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          id="lws-submit"
          className="cursor-pointer btn btn-primary w-fit"
        >
          Edit
        </button>
      </div>
    </form>
  );
}

export default EditForm;
