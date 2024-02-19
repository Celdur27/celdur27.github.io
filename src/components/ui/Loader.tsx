import React, { useContext } from 'react';

import { UIContext } from '../../store/ui-context';

import classes from './Loader.module.scss';
import { getStyleForCurrentTheme } from '../../utils/themeHelpers';

export default function Loader(): JSX.Element {
  const uiCtx = useContext(UIContext);

  return (
    <div
      className={`${classes.loader} ${classes[`loader--${getStyleForCurrentTheme(uiCtx.isLightTheme)}`]}`}
    ></div>
  );
}
