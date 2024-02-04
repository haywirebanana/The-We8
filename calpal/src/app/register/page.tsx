import Form from '../components/registerForm';

export default function Register() {
    return (
        <div className="flex flex-col items-center justify-center py-36 w-full flex-1 min-h-screen flex-col bg-green">
                <div className="bg-light-cream rounded-xl p-12 w-2/3">
                        <h1 className='font-serif text-2xl font-normal'>First, let&apos;s make you an account!</h1>
                        <p>Please fill out the following information:</p>
                        <Form />
                </div>
        </div>
    );
}
