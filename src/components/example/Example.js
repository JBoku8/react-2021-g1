import { TEST_IDS } from '../../utils/testids';

function Example({ message = 'default' }) {
  return (
    <>
      <div>
        <h1 className="text-muted fs-1" data-testid={TEST_IDS.example.message}>
          {message}
        </h1>
      </div>
    </>
  );
}

export default Example;
