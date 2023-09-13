import React from "react";
import ReactDOM from "react-dom/client";
import { Kanban } from "./Kanban/Index.tsx";
import GlobalStyle from "./Styles/global.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Kanban />
  </React.StrictMode>
);
