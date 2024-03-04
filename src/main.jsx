import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./routes/routes.jsx";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./app/store.js"; 
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
