import { useState } from 'react';
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
      <h1 className="title" style={styles}>
        {title}
      </h1>
      <Example message={counter} />
      <Button onClick={onReset} text="Reset" type="default" />
      <Button onClick={onAdd} text="Add" type="danger" />
      <Button onClick={onMinus} text="Minus" type="warning" />
    </div>
  );
};

export default Welcome;
