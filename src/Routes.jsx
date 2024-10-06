import React from "react";
import {createBrowserRouter} from "react-router-dom";

import Layout from "./Layout";
import ErrorScreen from "./ErrorScreen";
import PrimaryButton from "./Components/PrimaryButton";

const router = createBrowserRouter([
<<<<<<< HEAD
  {
    path: "/",
    exact: true,
    element: <Layout />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: "",
        element: <h1>Home Page</h1>,
      },
      {
        path: "primary-button",
        element: <PrimaryButton />
      }
    ],
  },
=======
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorScreen/>,
        children: [
            {
                path: "",
                element: <h1>Home Page</h1>,
            },
        ],
    },
>>>>>>> 5e33740d0856a62df2351a651f2253d51f45d85a
]);

export default router;
