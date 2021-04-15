import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
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
          <li className="nav-item">
            <NavLink
              to="/profile"
              className="nav-link"
              activeClassName="active">
              Profile
            </NavLink>
          </li>
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
