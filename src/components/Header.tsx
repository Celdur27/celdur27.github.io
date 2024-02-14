import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UIContext } from '../store/ui-context';

import classes from './Header.module.scss';

type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps): JSX.Element {
  const uiCtx = useContext(UIContext);

  const handleClick = () => {
    uiCtx.toggleTheme();
  };

  return (
    <header className={`${classes.header} ${className}`}>
      <div className={classes['header-content']}>
        <Link to="/" className={classes['header-title']}>
          Where in the world?
        </Link>
        <button onClick={handleClick} className={classes['header-button']}>
          <i className="fa-regular fa-moon"></i>
          <span className={classes['header-button-text']}>Dark Mode</span>
        </button>
      </div>
    </header>
  );
}
