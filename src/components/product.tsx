import { useDispatch, useSelector } from "react-redux";
import {
  addQuantity,
  decreaseQuantity,
  deleteCart,
} from "../features/product/productSlice";

export const Product = () => {
  const dispatch = useDispatch();
  // const productQuantity = useSelector((state) => state.product.products[0].quantity);
  const productQuantity = useSelector((state) => state.product.products);

  console.log(productQuantity, "product quantity");

  // const productQuantity = useSelector(
  //   (state) =>
  //     state.product.products.find((p) => p.id === pro.id)?.quantity ?? 0
  // );

  return (
    <>
      {productQuantity.map((pro) => (
        <div
          key={pro.id}
          style={{ border: "1px solid black", height: "200px", width: "250px" }}
        >
          <h1>{pro.title}</h1>
          <button onClick={() => dispatch(addQuantity(pro.id))}>
            ADD TO CART
          </button>
          <button onClick={() => dispatch(deleteCart(pro.id))}>
            DELETE CART
          </button>

          <br></br>
          <button onClick={() => dispatch(addQuantity(pro.id))}>+</button>

          <span>{pro.quantity}</span>
          <button onClick={() => dispatch(decreaseQuantity(pro.id))}>-</button>
        </div>
      ))}
    </>
  );
};
