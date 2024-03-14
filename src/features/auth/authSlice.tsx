import { createSlice } from "@reduxjs/toolkit";

// interface Login {
//   id: number;
//   name: string;
// }

// interface AuthState {
//   isAuthenticated: boolean;
//   user: Login | null;
// }

const initialState: Comp.AuthState = {
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // console.log(state, "this is state"); // this always shows proxy on rtk
      // console.log(action.payload, "Action.Payload"); //what I dispatch comes here

      state.isAuthenticated = true;
      state.user = action.payload;

      console.log(state.user, "state.user");
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
