import SignupForm from "../components/SignupForm";

export default function signup() {
  return (
    <div className="max-w-md mx-auto mt-16">
      <h1 className="text-2xl font-bold mb-4 text-center">Create Account</h1>
      <SignupForm />
    </div>
  );
}
