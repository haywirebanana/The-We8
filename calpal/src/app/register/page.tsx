import Form from "../components/registerForm";

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 min-h-screen flex-col bg-green">
      <div className="bg-light-cream rounded-xl p-12 w-2/3">
        <h1>First, let&apos;s make you an account!</h1>
        <p>Please fill out the following information:</p>
        <Form />
      </div>
    </div>
  );
}
