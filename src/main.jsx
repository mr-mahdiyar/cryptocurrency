import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./routes/routes.jsx";
import 'antd/dist/antd.css'
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
