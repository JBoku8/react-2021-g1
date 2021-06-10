import './button.css';

function Button({ type = 'button', onClick, text = 'default text', ...props }) {
  return (
    <>
      <button className={`btn ${type} mx-1`} onClick={onClick} type={type} {...props}>
        {text}
      </button>
    </>
  );
}

export default Button;
