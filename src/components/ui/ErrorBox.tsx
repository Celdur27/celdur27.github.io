import React from 'react';

import classes from './ErrorBox.module.scss';

type ErrorBoxProps = {
  title: string;
  message: string;
};

export default function ErrorBox({
  title,
  message,
}: ErrorBoxProps): JSX.Element {
  return (
    <div className={classes['error-box']}>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
}
