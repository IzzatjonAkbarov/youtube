import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RouterComponents from "./components/route";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RouterComponents />
    </BrowserRouter>
  </StrictMode>
);
