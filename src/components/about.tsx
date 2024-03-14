import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../features/api/apiSlice";
import { pagination } from "../features/pagination/paginationSlice";
import { RootState } from "../app/store";

export const About = () => {
  const dispatch = useDispatch();
  const apiProducts = useSelector((state: RootState) => state.apiData.users);
  console.log(apiProducts, "apiProducts");

  const loading = useSelector((state: any) => state.apiData.loading);
  // console.log(loading, "zzzzzzzzzzzzzzzzzzzz");

  const paginationData = useSelector((state: any) => state.pagination);
  console.log(paginationData, "pagination data");
  console.log(paginationData.page, "paginationData.page");

  const totalPage = apiProducts.length / paginationData.perPageData;
  console.log(totalPage, "totalPage");

  useEffect(() => {
    //@ts-ignore
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  // Calculate start and end indices based on pagination settings
  const startIndex = (paginationData.page - 1) * paginationData.perPageData;
  const endIndex = startIndex + paginationData.perPageData;
  const displayedProducts = apiProducts.slice(startIndex, endIndex);

  // const displayedProducts = apiProducts.slice(0, 2);

  return (
    <>
      <span>Current page: {paginationData.page}</span>
      <button
        onClick={() =>
          dispatch(
            pagination({
              page: paginationData.page - 1,
              perPageData: paginationData.perPageData,
            })
          )
        }
        disabled={paginationData.page <= 1}
      >
        Previous
      </button>

      {Array(totalPage)
        .fill(0)
        .map((b, index) => {
          return (
            <button
              style={
                paginationData.page === index + 1
                  ? { backgroundColor: "#3498db", color: "#fff" }
                  : {}
              }
              onClick={() =>
                dispatch(
                  pagination({
                    page: index + 1,
                    perPageData: paginationData.perPageData,
                  })
                )
              }
            >
              {index + 1}
            </button>
          );
        })}

      <button
        onClick={() =>
          dispatch(
            pagination({
              page: paginationData.page + 1,
              perPageData: paginationData.perPageData,
            })
          )
        }
        disabled={totalPage === paginationData.page}
      >
        Next
      </button>
      {displayedProducts.map((pro) => {
        return (
          <div style={{ border: "1px solid black" }}>
            <p>id:{pro.id}</p>
            <p>title:{pro.title}</p>
            <p>body:{pro.body}</p>
          </div>
        );
      })}
    </>
  );
};
