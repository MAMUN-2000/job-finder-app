import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "./jobsAPI";

//initial state
const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  errorMsg: "",
};

// async thunk

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const data = await api.default();
  return data;
});

// slice

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });
  },
});

export default jobsSlice.reducer;
