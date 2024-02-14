import React from 'react';
import './App.scss';
import Router from './router/Router';
import UIContextProvider from './store/ui-context';

function App() {
  return (
    <UIContextProvider>
      <Router />
    </UIContextProvider>
  );
}

export default App;
