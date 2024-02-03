"use client"
import { useState } from 'react';
import Field from './field';
import Button from './button';

const RegisterPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => {
        // Handle form submission
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center w-full flex-1 flex-col bg-light-cream">
                <Field labelName='First Name' fieldType='text' fieldValue={firstName} onChange={setFirstName} placeholderText='First Name' />
                <Field labelName='Last Name' fieldType='text' fieldValue={lastName} onChange={setLastName} placeholderText='Last Name' />
                <Field labelName='Address' fieldType='text' fieldValue={address} onChange={setAddress} placeholderText='Address' />
                <Field labelName='Email' fieldType='email' fieldValue={email}  onChange={setEmail} placeholderText='Email Address' />
                <Field labelName='Password' fieldType='password' fieldValue={password} onChange={setPassword} placeholderText='A secure password'  />
                <Field labelName='Confirm Password' fieldType='password' fieldValue={confirmPassword} onChange={setConfirmPassword} placeholderText='Re-enter your secure password'  />
                <Button buttonText='Submit' onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default RegisterPage;
