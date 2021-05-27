import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { withAuthProtected } from '../../hoc';
import { setAuthGuestAction } from '../../redux/actions';
import { AUTH_TOKEN } from '../../utils/constants';
import { HOME } from '../../utils/routePaths';

function Profile(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogOut = () => {
    localStorage.removeItem(AUTH_TOKEN);
    dispatch(setAuthGuestAction());
    history.replace(HOME);
  };

  const { title } = props;
  return (
    <div className={classNames('profile row mt-4')}>
      <h3>{title}</h3>
      <button className="btn btn-primary" onClick={onLogOut} type="button">
        Log Out
      </button>
    </div>
  );
}

export default withAuthProtected(Profile);
