import React, { useContext } from 'react';

import Header from '../components/header/Header';
import { Outlet } from 'react-router';
import { UIContext } from '../store/ui-context';

export default function RootLayout(): JSX.Element {
  const uiCtx = useContext(UIContext);

  return (
    <>
      <Header />
      <main className={uiCtx.isLightTheme ? 'light' : 'dark'}>
        <Outlet />
      </main>
    </>
  );
}
