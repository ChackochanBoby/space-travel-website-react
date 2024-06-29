import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import "./index.css";
import CrewPage from "./routes/CrewPage";
import DestinationPage from "./routes/DestinationPage";
import TechnologyPage from "./routes/TechnologyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:<HomePage/>
      },
      {
        path: "/crew",
        element:<CrewPage/>
      },
      {
        path: "/destination",
        element:<DestinationPage/>
      },
      {
        path: "/technology",
        element:<TechnologyPage/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
