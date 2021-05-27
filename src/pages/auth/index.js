import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import SignInPage from './sign-in';
import SignUpPage from './sign-up';
import { withNoAuth } from '../../hoc';
import { AUTH_SIGN_IN, AUTH_SIGN_UP } from '../../utils/routePaths';

function AuthPage() {
  const location = useLocation();

  return (
    <div className="row mt-4">
      <div className="col-12">
        <h2 className="text-muted">Auth Page</h2>
        <nav className="nav nav-pills nav-justified mt-2">
          <Link
            className={classNames('nav-link', {
              active: location.pathname.includes(AUTH_SIGN_IN),
            })}
            to={AUTH_SIGN_IN}>
            Sign In
          </Link>
          <Link
            className={classNames('nav-link', {
              active: location.pathname.includes(AUTH_SIGN_UP),
            })}
            to={AUTH_SIGN_UP}>
            Sign Up
          </Link>
        </nav>
      </div>

      <div className="row mt-5">
        <Switch>
          <Route path={AUTH_SIGN_IN}>
            <SignInPage />
          </Route>

          <Route path={AUTH_SIGN_UP}>
            <SignUpPage />
          </Route>

          <Redirect to={AUTH_SIGN_IN} />
        </Switch>
      </div>
    </div>
  );
}

export default withNoAuth(AuthPage);
