import SignInForm from '../../../components/forms/sign-in-form';

function SignInPage() {
  return (
    <div className="row mt-4">
      <div className="col-12">
        <h2 className="text-muted">Sign In Page</h2>
      </div>
      <div className="d-flex justify-content-center">
        <SignInForm />
      </div>
    </div>
  );
}

export default SignInPage;
