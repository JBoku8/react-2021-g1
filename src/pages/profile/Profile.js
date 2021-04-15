import classNames from 'classnames';
import { withAuthProtected } from '../../hoc/withAuthProtected';

function Profile(props) {
  return (
    <div className={classNames('profile row mt-4')}>
      <h3>{props.title}</h3>
    </div>
  );
}

export default withAuthProtected(Profile);
