'use client'
import Form from '../components/loginForm';

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center w-full flex-1 min-h-screen flex-col bg-green">
                <div className="bg-light-cream rounded-xl p-12 w-2/3">
                        <h1>Let&apos;s get you logged in!</h1>
                        <Form />
                </div>
        </div>
    );
}
