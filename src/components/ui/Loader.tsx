import React, { useContext } from 'react';

import { UIContext } from '../../store/ui-context';

import classes from './Loader.module.scss';

export default function Loader(): JSX.Element {
  const uiCtx = useContext(UIContext);

  return (
    <div
      className={`${classes.loader} ${uiCtx.isLightTheme ? classes['loader--light'] : classes['loader--dark']}`}
    ></div>
  );
}
