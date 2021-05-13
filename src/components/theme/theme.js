import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// import css from './theme.module.css';

function Theme({ children }) {
  const { pathname } = useLocation();
  const [themeColor, setThemeColor] = useState('white');

  useEffect(() => {
    switch (pathname) {
      case '/todos':
        // setThemeColor(css.todoHome);
        break;
      case '/counter':
        // setThemeColor(css.counterHome);
        break;
      default:
      // setThemeColor(css.home);
    }
  }, [pathname, setThemeColor]);

  return (
    <div className={classNames('theme-container', themeColor)}>{children}</div>
  );
}

Theme.propTypes = {
  page: PropTypes.string,
};

export default Theme;
