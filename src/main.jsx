import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/query-client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
