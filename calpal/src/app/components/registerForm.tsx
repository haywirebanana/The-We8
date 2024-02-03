"use client"
import { useState } from 'react';

const RegisterPage = () => {
    const [step, setStep] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = () => {
        // Handle form submission
    };

    return (
        <div>
            {step === 1 && (
                <div className="flex flex-col items-center justify-center w-full flex-1 px-40 flex-col bg-light-cream">
                    <label>
                        First Name:
                        <br />
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Last Name:
                        <br />
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Address:
                        <br />
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <br />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <br />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Confirm Password:
                        <br />
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </label>
                    <br />
                    <button onClick={handleNextStep}>Next</button>
                </div>
            )}

            {/* Add more steps here */}

            {step > 1 && (
                <button onClick={handlePreviousStep}>Previous</button>
            )}

            {step === 3 && (
                <button onClick={handleSubmit}>Submit</button>
            )}
        </div>
    );
};

export default RegisterPage;
