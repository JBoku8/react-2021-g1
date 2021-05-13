import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { withAuthProtected } from '../../hoc';
import { setAuthGuestAction } from '../../redux/actions';

function Profile(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogOut = () => {
    localStorage.removeItem('auth.token');
    dispatch(setAuthGuestAction());
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
