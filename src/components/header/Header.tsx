import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UIContext } from '../../store/ui-context';

import classes from './Header.module.scss';

export default function Header(): JSX.Element {
  const uiCtx = useContext(UIContext);

  const handleClick = () => {
    uiCtx.toggleTheme();
  };

  return (
    <header
      className={`${classes.header} ${uiCtx.isLightTheme ? classes['header--light'] : classes['header--dark']}`}
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
