"use client"
import { useState } from 'react';
import Field from './field';
import Button from './button';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        //to be implemented
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center w-full flex-1 flex-col bg-light-cream">
                <Field labelName='Email' fieldType='email' fieldValue={email}  onChange={setEmail} placeholderText='Enter your email address' />
                <Field labelName='Password' fieldType='password' fieldValue={password} onChange={setPassword} placeholderText='Enter your password'  />
                <Button buttonText='Submit' onClick={handleSubmit} />
            </div>
        </div>
    );
};

export default LoginPage;