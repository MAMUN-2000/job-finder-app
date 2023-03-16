import AddNewJob from "./page/AddNewJob";
import EditJob from "./page/EditJob";
import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-job" element={<AddNewJob />} />
      <Route path="/edit-job" element={<EditJob />} />
    </Routes>
  );
}

export default App;
