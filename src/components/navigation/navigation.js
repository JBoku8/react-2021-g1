import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelector } from '../../redux/selectors/auth-selectors';
import * as routes from '../../utils/routePaths';

const Navigation = () => {
  const authorized = useSelector(authSelector);

  return (
    <header className="header pt-4">
      <h2 className="text-muted">Header</h2>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink to={routes.HOME} className="nav-link" activeClassName="active" exact>
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={routes.TODO_PATH} className="nav-link" activeClassName="active">
              Todo Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={routes.COUNTER_PATH} className="nav-link" activeClassName="active">
              Counter Home
            </NavLink>
          </li>

          {authorized ? (
            <li className="nav-item">
              <NavLink to={routes.PROFILE_PATH} className="nav-link" activeClassName="active">
                Profile
              </NavLink>
            </li>
          ) : null}

          <li className="nav-item">
            <NavLink to={routes.FAKER_BOOKS_PATH} className="nav-link" activeClassName="active">
              Faker Books
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={routes.REDUX_COUNTER_PATH} className="nav-link" activeClassName="active">
              Redux Counter
            </NavLink>
          </li>

          {!authorized ? (
            <li className="nav-item">
              <NavLink to={routes.AUTH_PATH} className="nav-link" activeClassName="active">
                Auth
              </NavLink>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
