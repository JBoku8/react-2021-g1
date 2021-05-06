import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import SignInPage from './sign-in';
import SignUpPage from './sign-up';
import { withNoAuth } from '../../hoc';

function AuthPage(props) {
  const location = useLocation();

  return (
    <div className="row mt-4">
      <div className="col-12">
        <h2 className="text-muted">Auth Page</h2>
        <nav className="nav nav-pills nav-justified mt-2">
          <Link
            className={classNames('nav-link', {
              active: location.pathname.includes('/sign-in'),
            })}
            to="/auth/sign-in">
            Sign In
          </Link>
          <Link
            className={classNames('nav-link', {
              active: location.pathname.includes('/sign-up'),
            })}
            to="/auth/sign-up">
            Sign Up
          </Link>
        </nav>
      </div>

      <div className="row mt-5">
        <Switch>
          <Route path="/auth/sign-in">
            <SignInPage />
          </Route>

          <Route path="/auth/sign-up">
            <SignUpPage />
          </Route>

          <Redirect to="/auth/sign-in" />
        </Switch>
      </div>
    </div>
  );
}

export default withNoAuth(AuthPage);
