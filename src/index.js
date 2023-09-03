import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const Markdown = () => {
  return <App />;
};

const root = createRoot(document.getElementById("root"));
root.render(<Markdown />);
