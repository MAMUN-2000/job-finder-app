import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "./jobsAPI";

//initial state
const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  errorMsg: "",
  updated: {},
};

// async thunk

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const data = await api.default();
  return data;
});
export const addJob = createAsyncThunk("jobs/addJob", async (data) => {
  const response = await api.addJobAPI(data);
  return response;
});

export const deleteJob = createAsyncThunk("jobs/deleteJob", async (id) => {
  const response = await api.deleteJobAPI(id);
  return response;
});

export const updateJob = createAsyncThunk(
  "jobs/updateJob",
  async ({ data, id }) => {
    const response = await api.updateJobAPI(data, id);
    return response;
  }
);

export const filterJobType = createAsyncThunk(
  "jobs/filterJobType",
  async ({ type, search }) => {
    const response = await api.filterJobsAPI({ type, search });
    return response;
  }
);

// slice

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    updateData(state, action) {
      state.updated = action.payload;
    },
    lowToHigh(state) {
      state.jobs.sort((prev, cur) => {
        if (Number(prev.salary) > Number(cur.salary)) {
          return 1;
        } else if (Number(prev.salary) < Number(cur.salary)) {
          return -1;
        } else return 0;
      });
    },
    highToLow(state) {
      state.jobs.sort((prev, cur) => {
        if (Number(prev.salary) < Number(cur.salary)) {
          return 1;
        } else if (Number(prev.salary) > Number(cur.salary)) {
          return -1;
        } else return 0;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.jobs = [];
        state.errorMsg = action.error.message;
      })
      .addCase(addJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(addJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs.push(action.payload);
      })
      .addCase(addJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMsg = action.error.message;
      })
      .addCase(deleteJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = state.jobs.filter((i) => i.id !== action.meta.arg);
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMsg = action.error.message;
      })
      .addCase(updateJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.jobs.findIndex((i) => i.id === action.payload.id);
        state.jobs[index] = action.payload;
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMsg = action.error.message;
      })
      .addCase(filterJobType.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(filterJobType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(filterJobType.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMsg = action.error.message;
      });
  },
});

export default jobsSlice.reducer;
export const { updateData, lowToHigh, highToLow } = jobsSlice.actions;
