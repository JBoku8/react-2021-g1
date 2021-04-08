import { useState, useEffect } from 'react';

// კომპონენტის გადახატვა - function()
// კომპონენტის დახატვის პროცესი = funcito() ერთჯერადი
// ცვლადოის ცვლილებაზე დამოკიდებული - function()

function Home(props) {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('მუდმივი');
  });

  useEffect(() => {
    console.info('ერთჯერადი');
  }, []);

  useEffect(() => {
    console.log('მნიშვნელობის შეცვლილსას');
    setMessage(value);
  }, [value]);

  return (
    <div className="row">
      <button
        className="btn btn-primary"
        onClick={() => {
          setValue(Math.random().toString());
        }}>
        Re Render Home component
      </button>
      <h1>{value}</h1>
    </div>
  );
}

export default Home;
