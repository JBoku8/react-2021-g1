import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader component testing', () => {
  it('should render page is loading text', () => {
    render(<Loader />);
    const loaderTitleElement = screen.getByText('Page is Loading...');

    expect(loaderTitleElement).toBeInTheDocument();
  });
});

describe('Loader snapshots', () => {
  test('renders successfully', () => {
    const component = render(<Loader />);
    expect(component).toMatchSnapshot();
  });
});
