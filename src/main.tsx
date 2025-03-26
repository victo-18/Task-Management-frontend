import { StrictMode } from "react";
import{QueryClient,QueryClientProvider}from '@tanstack/react-query'
import{ReactQueryDevtools} from '@tanstack/react-query-devtools'
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./router";

//Habilitando react Query
const queryClient =new QueryClient()
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <Router />
    <ReactQueryDevtools/>
    </QueryClientProvider>
  </StrictMode>
);
