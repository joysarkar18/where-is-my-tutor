import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./screens/login.jsx";
import { Provider } from "react-redux";
import findMyTutorStore from "./store/findMyTutorStore.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={findMyTutorStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
