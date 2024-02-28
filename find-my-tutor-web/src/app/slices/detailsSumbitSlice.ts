import { createSlice } from "@reduxjs/toolkit";

import { errorState } from "./authSlice";

export type updateDetailsState = {
  status: boolean;
  isLoading: boolean;
  error: errorState;
};

const initialState: updateDetailsState = {
  isLoading: false,
  status: false,
  error: { errorMessage: "", errorType: "", status: false },
};

const detailsUpdateSlice = createSlice({
  initialState,
  name: "details",
  reducers: {},
});

export default detailsUpdateSlice.reducer;
