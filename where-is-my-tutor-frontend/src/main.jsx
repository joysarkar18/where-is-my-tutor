import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./screens/login.jsx";
<<<<<<< HEAD
import Register from "./screens/register.jsx";
=======
import { Provider } from "react-redux";
import findMyTutorStore from "./store/findMyTutorStore.js";
>>>>>>> 4f009e84bf416a070204cd6f4817c8f4c213f126

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={findMyTutorStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
