import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UIContext } from '../../store/ui-context';

import classes from './Header.module.scss';
import { getStyleForCurrentTheme } from '../../utils/themeHelpers';

export default function Header(): JSX.Element {
  const uiCtx = useContext(UIContext);

  const handleClick = () => {
    uiCtx.toggleTheme();
  };

  return (
    <header
      className={`${classes.header} ${classes[`header--${getStyleForCurrentTheme(uiCtx.isLightTheme)}`]}`}
    >
      <div className={classes['header-content']}>
        <Link to="/countries-api" className={classes['header-title']}>
          Where in the world?
        </Link>
        <button onClick={handleClick} className={classes['header-button']}>
          {uiCtx.isLightTheme ? (
            <i className="fa-regular fa-moon"></i>
          ) : (
            <i className="fa-regular fa-sun"></i>
          )}
          <span className={classes['header-button-text']}>
            {uiCtx.isLightTheme ? 'Dark Mode' : 'Light Mode'}
          </span>
        </button>
      </div>
    </header>
  );
}
