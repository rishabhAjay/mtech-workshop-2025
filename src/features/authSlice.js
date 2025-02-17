// src/features/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  clearAuthFromLocalstorage,
  setAuthLocalStorage,
} from "../utils/localstorage.util";

// Define an initial state for the auth slice
const initialState = {
  user: null,
  status: "idle",
  error: null,
};

// AsyncThunk for login action
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/login", {
        ...credentials,
        expiresInMins: 30,
      });
      setAuthLocalStorage(
        response.data.accessToken,
        response.data.refreshToken
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      clearAuthFromLocalstorage();
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
