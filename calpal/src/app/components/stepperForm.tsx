"use client"
import { useState } from 'react';
import Field from './field';
import Button from './button';

const StepperForm = () => {
    const [step, setStep] = useState(1);
    const [fieldName, setFieldName] = useState('');

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
                    <Button buttonText="Next" onClick={handleNextStep} />
                </div>
            )}

            {/* Add more steps here */}

            {step > 1 && (
                <Button buttonText="Previous" onClick={handlePreviousStep} />
            )}

            {step === 3 && (
                <Button buttonText="Submit" onClick={handleSubmit} />
            )}
        </div>
    );
};

export default StepperForm;
