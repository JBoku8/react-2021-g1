import { Redirect } from 'react-router';

export const withAuthProtected = (Component) => {
  const WithAuthProtected = (props) => {
    const token = JSON.parse(localStorage.getItem('auth.token'));
    if (!token) return <Redirect to="/" />;

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />;
  };

  return WithAuthProtected;
};

export default withAuthProtected;
