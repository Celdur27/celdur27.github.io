import React, { useContext } from 'react';

import Header from '../components/header/Header';
import { Outlet } from 'react-router';
import { UIContext } from '../store/ui-context';
import { getStyleForCurrentTheme } from '../utils/themeHelpers';

export default function RootLayout(): JSX.Element {
  const uiCtx = useContext(UIContext);

  return (
    <>
      <Header />
      <main className={`${getStyleForCurrentTheme(uiCtx.isLightTheme)}`}>
        <Outlet />
      </main>
    </>
  );
}
