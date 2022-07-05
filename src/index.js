import React from 'react';
import ReactDOM from 'react-dom/client';
import "antd/dist/antd.css"
import App from './App';
import {ReactQueryDevtools} from "react-query/devtools"

import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  </React.StrictMode>
);

