import React, { useEffect } from 'react';
function ChildComponent(props) {
  console.log('CHILD RE RENDER');

  useEffect(() => {
    props.randomize('users');
  }, [props.randomize]);

  return (
    <div className="row">
      <h4>Child Component</h4>
      <h6>{props.title}</h6>
    </div>
  );
}

export default React.memo(ChildComponent);
