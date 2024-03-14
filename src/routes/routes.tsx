import { useRoutes } from "react-router-dom";
import { Home } from "../components/home";
import { Login } from "../components/login";
import { ContactUs } from "../components/contactus";
import { About } from "../components/about";
import { PrivateRoute } from "./privateroute";
import { Product } from "../components/product";
import { ProtectedRoute } from "./protectedroute";
import { RoleRoute } from "./rolebasedrouting";

export function Route() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: (
        <RoleRoute allowedRoles={["admin", "user"]}>
          <PrivateRoute />
        </RoleRoute>
      ),
      children: [
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/",
      element: (
        <RoleRoute allowedRoles={["admin", "user"]}>
          <PrivateRoute />,
        </RoleRoute>
      ),
      children: [
        {
          path: "/contactus",
          element: <ContactUs />,
        },
      ],
    },
    {
      path: "/",
      element: (
        <RoleRoute allowedRoles={["admin"]}>
          <PrivateRoute />,
        </RoleRoute>
      ),
      children: [
        {
          path: "/product",
          element: <Product />,
        },
      ],
    },
  ]);

  return <div>{routes}</div>;
}
// import { useRoutes } from "react-router-dom";
// import { Home } from "../components/home";
// import { Login } from "../components/login";
// import { ContactUs } from "../components/contactus";
// import { About } from "../components/about";
// import { PrivateRoute } from "./privateroute";
// import { useState } from "react";

// export function Route() {
//   const [token, setToken] = useState(false);
//   console.log("1");

//   let routes = useRoutes([
//     {
//       path: "/",
//       element: <Home />,
//     },
//     {
//       path: "/login",
//       element: <Login token={token} setToken={setToken} />,
//     },
//     {
//       path: "/",
//       element: <PrivateRoute token={token} setToken={setToken}></PrivateRoute>,
//       children: [
//         {
//           path: "/about",
//           element: <About />,
//         },
//       ],
//     },
//     {
//       path: "/",
//       element: <PrivateRoute token={token} setToken={setToken}></PrivateRoute>,
//       children: [
//         {
//           path: "/contactus",
//           element: <ContactUs />,
//         },
//       ],
//     },

//   ]);

//   return <div>{routes}</div>;
// }

// route.js
