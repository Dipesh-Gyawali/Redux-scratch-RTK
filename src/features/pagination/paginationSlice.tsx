import { createSlice } from "@reduxjs/toolkit";

// interface PaginationState {
//   page: number;
//   perPageData: number;
// }

const initialState: Comp.PaginationState = {
  page: 1,
  perPageData: 5,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    pagination: (state, action) => {
      // console.log(action.payload)

      state.page = action.payload.page;
      if (state.page >= 1) {
        state.page = action.payload.page;
      } else {
        state.page = 1;
      }

      state.perPageData = action.payload.perPageData;
    },
  },
});

export const { pagination } = paginationSlice.actions;

export default paginationSlice.reducer;
