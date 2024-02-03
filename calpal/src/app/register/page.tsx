import Form from '../components/registerForm';

export default function Register() {
    return (
        <div className="flex flex-col items-center justify-center w-full flex-1 px-40 min-h-screen flex-col bg-green">
                <div className="bg-light-cream rounded-xl p-4 w-2/3">
                        <h1>First, let's make you an account!</h1>
                        <p>Please fill out the following information:</p>
                        <Form />
                </div>
        </div>
    );
}
