import classNames from 'classnames';
import { useHistory } from 'react-router';
import { withAuthProtected } from '../../hoc/withAuthProtected';

function Profile(props) {
  const history = useHistory();
  const onLogOut = () => {
    localStorage.removeItem('auth.token');
    history.replace('/');
  };

  return (
    <div className={classNames('profile row mt-4')}>
      <h3>{props.title}</h3>
      <button className="btn btn-primary" onClick={onLogOut}>
        Log Out
      </button>
    </div>
  );
}

export default withAuthProtected(Profile);
