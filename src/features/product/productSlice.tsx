import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, title: "Laptop", quantity: 0 },
    { id: 2, title: "Iphone", quantity: 0 },
    { id: 3, title: "Mouse", quantity: 0 },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addQuantity: (state, action) => {
        // console.log("Action payload:", action.payload);

      const productId = action.payload;
      const product = state.products.find((p) => p.id === productId);

      // console.log("Found product:", product);
      // console.log("Found state:", state);

      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.products.find((p) => p.id === productId);

      if (product && product.quantity > 0) {
        product.quantity -= 1;
      }
    },
    deleteCart: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter((p) => p.id !== productId);
    },
  },
});

export const { addQuantity, decreaseQuantity, deleteCart } =
  productSlice.actions;

export default productSlice.reducer;

//   const { productId } = action.payload;
//   const product = state.products.find((p) => p.id === productId);
//   console.log(product, "pppppppppppppppppppp");


      // const product = state.products.find((p) => {
//          console.log(p.id, "pid");
//            console.log(productId, "product id");
//   });