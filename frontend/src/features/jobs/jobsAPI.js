import axios from "../../util/axios";

export default async function jobsAPI() {
  const response = await axios.get("jobs");
  return response.data;
}

export async function addJobAPI(data) {
  const response = await axios.post("jobs", data);
  return response.data;
}

export async function deleteJobAPI(id) {
  const response = await axios.delete("jobs/" + id);
  return response.data;
}

export async function updateJobAPI(data, id) {
  const response = await axios.put(`jobs/${id}`, data);
  return response.data;
}

export async function filterJobsAPI({ type = "", search = "" }) {
  const queryString = `type_like=${type}&q=${search}`;
  const response = await axios.get(`jobs?${queryString}`);
  return response.data;
}
