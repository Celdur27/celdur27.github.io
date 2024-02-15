import React from 'react';
import './App.scss';
import Router from './router/Router';
import UIContextProvider from './store/ui-context';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utils/http';

function App() {
  return (
    <UIContextProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </UIContextProvider>
  );
}

export default App;
