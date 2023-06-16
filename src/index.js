import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import Context from './reducer/Context';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Context>
        <App /> 
      </Context>
    </QueryClientProvider>
  </React.StrictMode>
);
