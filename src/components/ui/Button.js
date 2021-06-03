import './button.css';

function Button({ type = 'button', onClick, text = 'default text' }) {
  return (
    <>
      <button className={`btn ${type} mx-1`} onClick={onClick} type={type}>
        {text}
      </button>
    </>
  );
}

export default Button;
