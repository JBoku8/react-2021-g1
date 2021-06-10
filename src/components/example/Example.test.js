import { render } from '@testing-library/react';
import { TEST_IDS } from '../../utils/testids';
import Example from './Example';

describe('Example component testing', () => {
  it('should render default message', () => {
    const component = render(<Example />);

    expect(component.getByTestId(TEST_IDS.example.message)).toHaveTextContent('default');
  });
  it('should render with specified props', () => {
    const testMessage = 'testMessage';
    const component = render(<Example message={testMessage} />);

    expect(component.getByTestId(TEST_IDS.example.message)).toHaveTextContent(testMessage);
  });
});
