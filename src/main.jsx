import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import TambahCatatan from "./TambahCatatan.jsx";
import Arsip from "./pages/Arsip.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tambah",
    element: <TambahCatatan />,
  },
  {
    path: "/arsip",
    element: <Arsip />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/note-app-reactjs">
      <RouterProvider router={router} />
    </BrowserRouter>
  </StrictMode>
);
