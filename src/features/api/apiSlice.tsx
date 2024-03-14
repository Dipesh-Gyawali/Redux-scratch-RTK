import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit";
import ApiService from "./api.service";

const apiService = new ApiService("https://jsonplaceholder.typicode.com"); // Adjust the base URL as needed

// interface User{
//   id: number;
//   title: string;
//   body: string;
// }
// type ShowUserPayload = User[];
export const showUser = createAsyncThunk<Api.ShowUserPayload, void, { rejectValue: Error }>(
  "showUser",
  async (_, { rejectWithValue }) => {
    try {
      // const response = await fetch(
      //   "https://jsonplaceholder.typicode.com/posts"
      // );
      // const result: Api.User[] = await response.json();
      const result = await apiService.showUsers();


      // console.log(result, "rrrrrrrrrrrrrrrrrrrrrrrrrr");
      return result;
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
);
interface UserDetailState {
  users: Api.User[];
  loading: boolean;
  error: boolean;
}

const initialState: UserDetailState = {
  users: [],
  loading: false,
  error: false,
};

export const userDetail = createSlice({
  name: "userDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(showUser.pending, (state) => {
        state.loading = true;
        state.error = false
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});
export default userDetail.reducer;
