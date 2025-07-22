import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Toaster } from "sonner";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster richColors />
    </BrowserRouter>
  </StrictMode>
);
