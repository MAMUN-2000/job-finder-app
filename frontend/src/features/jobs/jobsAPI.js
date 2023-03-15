import axios from "../../util/axios";

export default async function jobsAPI() {
  const response = await axios.get("jobs");
  return response.data;
}
