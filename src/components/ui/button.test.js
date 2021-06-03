import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component testing', () => {
  it('should render button with default values ', () => {
    render(<Button />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'button');
    expect(buttonElement).toHaveTextContent('default text');
  });

  it('should render button with specified values ', () => {
    const props = {
      type: 'submit',
      text: 'Submit',
    };
    render(<Button {...props} />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', props.type);
    expect(buttonElement).toHaveTextContent(props.text);
  });

  it('should execute onClick handler function on button click with specified values ', () => {
    const onClickHandler = jest.fn();
    render(<Button onClick={onClickHandler} />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();

    buttonElement.click();
    expect(onClickHandler).toBeCalledTimes(1);
  });
});
