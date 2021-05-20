import './button.css';

function Button({ type = 'default', onClick, text = 'default text' }) {
  return (
    <>
      <button className={`btn ${type} mx-1`} onClick={onClick} type="button">
        {text}
      </button>
    </>
  );
}

export default Button;
