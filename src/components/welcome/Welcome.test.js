import { render } from '@testing-library/react';
import { TEST_IDS } from '../../utils/testids';
import Welcome from './Welcome';

const mockProps = {
  title: 'mock-title',
  startNumber: 0,
};

describe('Welcome component testing', () => {
  let component;
  beforeEach(() => {
    component = render(<Welcome {...mockProps} />);
  });

  it('should render title correctly', () => {
    const el = component.getByTestId(TEST_IDS.welcome.title);
    expect(el).toHaveTextContent(mockProps.title);
  });

  it('should increase the startNumber by 1', () => {
    const message = component.getByTestId(TEST_IDS.example.message);
    const addButton = component.getByTestId(TEST_IDS.welcome.addButton);

    addButton.click();

    expect(message).toHaveTextContent(mockProps.startNumber + 1);
  });

  it('should decrease the startNumber by 1', () => {
    const message = component.getByTestId(TEST_IDS.example.message);
    const minusButton = component.getByTestId(TEST_IDS.welcome.minusButton);

    minusButton.click();

    expect(message).toHaveTextContent(mockProps.startNumber - 1);
  });

  it('should reset the startNumber by to defaults', () => {
    const message = component.getByTestId(TEST_IDS.example.message);
    const minusButton = component.getByTestId(TEST_IDS.welcome.minusButton);
    const resetButton = component.getByTestId(TEST_IDS.welcome.resetButton);
    minusButton.click();
    expect(message).toHaveTextContent(mockProps.startNumber - 1);

    resetButton.click();
    expect(message).toHaveTextContent(mockProps.startNumber);
  });
});

describe('Welcome snapshot testing', () => {
  test('welcome renders as expected', () => {
    const component = render(<Welcome {...mockProps} />);
    expect(component).toMatchSnapshot();
  });
});
