import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelector } from '../../redux/selectors/auth-selectors';

const Navigation = () => {
  const authed = useSelector(authSelector);

  return (
    <header className="header pt-4">
      <h2 className="text-muted">Header</h2>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active" exact>
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/todos" className="nav-link" activeClassName="active">
              Todo Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/counter"
              className="nav-link"
              activeClassName="active">
              Counter Home
            </NavLink>
          </li>

          {!!authed ? (
            <li className="nav-item">
              <NavLink
                to="/profile"
                className="nav-link"
                activeClassName="active">
                Profile
              </NavLink>
            </li>
          ) : null}

          <li className="nav-item">
            <NavLink
              to="/faker-books"
              className="nav-link"
              activeClassName="active">
              Faker Books
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/redux-counter"
              className="nav-link"
              activeClassName="active">
              Redux Counter
            </NavLink>
          </li>

          {!authed ? (
            <li className="nav-item">
              <NavLink to="/auth" className="nav-link" activeClassName="active">
                Auth
              </NavLink>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

Navigation.propTypes = {
  onPageChange: PropTypes.func,
  pages: PropTypes.object,
};

export default Navigation;
