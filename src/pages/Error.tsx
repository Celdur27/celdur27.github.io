import React from 'react';
import Header from '../components/header/Header';

import classes from './Error.module.scss';

export default function ErrorPage(): JSX.Element {
  return (
    <>
      <Header />
      <main className={classes.error}>
        <h1>Error!</h1>
        <p>This data is unavailable! Please, try something else!</p>
      </main>
    </>
  );
}
