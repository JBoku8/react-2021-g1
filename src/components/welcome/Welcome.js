import { useState } from 'react';
import { TEST_IDS } from '../../utils/testids';
import Example from '../example';
import Button from '../ui/Button';

const Welcome = ({ title, startNumber }) => {
  const [counter, setCounter] = useState(startNumber);
  const styles = {
    color: 'red',
    textAlign: 'center',
  };

  // newValue !== oldValue
  // newObject !== oldObject

  const onAdd = () => {
    setCounter(counter + 1);
  };
  const onMinus = () => {
    setCounter(counter - 1);
  };
  const onReset = () => {
    setCounter(startNumber);
  };

  return (
    <div className="row">
      <h1 className="title" style={styles} data-testid={TEST_IDS.welcome.title}>
        {title}
      </h1>
      <Example message={counter} />
      <Button
        onClick={onReset}
        text="Reset"
        type="default"
        data-testid={TEST_IDS.welcome.resetButton}
      />
      <Button onClick={onAdd} text="Add" type="danger" data-testid={TEST_IDS.welcome.addButton} />
      <Button
        onClick={onMinus}
        text="Minus"
        type="warning"
        data-testid={TEST_IDS.welcome.minusButton}
      />
    </div>
  );
};

export default Welcome;
