"use client"
import { useState, useEffect } from 'react';
import Field from './field';
import Button from './button';
import Dropdown from './dropdownField'
import Divider from './divideLine'

const AboutForm = () => {
    const [step, setStep] = useState(1);
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [pronouns, setPronouns] = useState('');

    const EMPLOYMENT_DATA = ['Education', 'Health Care', 'Business Administration', 'Engineering', 'Arts', 'Human Resources', 'Maintenance Mechanic', 'Science and Technology',
                            'Transportation', 'Accountant', 'Communications', 'Construction', 'Marketing Manager', 'Administrative Assistant', 'Consulting',
                            'Consulting', 'Landscape Architect'];

    const [fieldName, setFieldName] = useState('');
    // const [fieldName, setFieldName] = useState('');
    // const [fieldName, setFieldName] = useState('');
    // const [fieldName, setFieldName] = useState('');
    // const [fieldName, setFieldName] = useState('');
    // const [fieldName, setFieldName] = useState('');
    const [email, setEmail] = useState('');
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({});
    
    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = () => {
        // Handle form submission
    };

    useEffect(() => {
        fetch(
          "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
        )
          .then((response) => response.json())
          .then((data) => {
            setCountries(data.countries);
            setSelectedCountry(data.userSelectValue);
          });
      }, []);

    return (
        <div>
            {step === 1 && (
                <div className="flex flex-col items-center justify-center w-full flex-1 px-40 flex-col bg-light-cream">
                    <h1 className=''>Tell us about you!</h1>
                    <Field labelName='Date of birth' fieldType='date' fieldValue={dateOfBirth} onChange={setDateOfBirth} placeholderText='Enter your date of birth' />
                    <div className='flex flex-row w-full gap-4' >
                        <Dropdown labelName='Gender identity' options={['Woman', 'Man', 'Transgender/Trans woman', 'Transgender/Trans man', 'Non-binary', 'Prefer not to say']} fieldValue={gender} onChange={setGender} />
                        <Dropdown labelName='Pronouns' options={['She/Her/Her', 'He/Him/His', 'They/Them/Their', 'Prefer not to say']} fieldValue={pronouns} onChange={setPronouns} />
                    </div>
                    <Divider />
                    <Dropdown labelName='Languages' options={['She/Her/Her', 'He/Him/His', 'They/Them/Their', 'Prefer not to say']} fieldValue={pronouns} onChange={setPronouns} />
                    <Dropdown labelName='English Proficiency' options={['She/Her/Her', 'He/Him/His', 'They/Them/Their', 'Prefer not to say']} fieldValue={pronouns} onChange={setPronouns} />
                    <Dropdown labelName='Origin Country' options={['She/Her/Her', 'He/Him/His', 'They/Them/Their', 'Prefer not to say']} fieldValue={pronouns} onChange={setPronouns} />
                    <Dropdown labelName='Ethnicity' options={['She/Her/Her', 'He/Him/His', 'They/Them/Their', 'Prefer not to say']} fieldValue={pronouns} onChange={setPronouns} />
                    <Button buttonText="Next" onClick={handleNextStep} />
                </div>
            )}

            {/* Add more steps here */}

            {step === 2 && (
                <div className="flex flex-col items-center justify-center w-full flex-1 px-40 flex-col bg-light-cream">
                    <h1 className=''>Tell us about you!</h1>
                    <Field labelName='Date of birth' fieldType='date' fieldValue={dateOfBirth} onChange={setDateOfBirth} placeholderText='Enter your date of birth' />
                    <div className='flex flex-row w-full gap-4' >
                        <Dropdown labelName='Gender identity' options={['Woman', 'Man', 'Transgender/Trans woman', 'Transgender/Trans man', 'Non-binary', 'Prefer not to say']} fieldValue={gender} onChange={setGender} />
                        <Dropdown labelName='Pronouns' options={['She/Her/Her', 'He/Him/His', 'They/Them/Their', 'Prefer not to say']} fieldValue={pronouns} onChange={setPronouns} />
                    </div>
                    <Divider />
                    <Button buttonText="Previous" onClick={handlePreviousStep} />
                    <Button buttonText="Next" onClick={handleNextStep} />
                </div>
            )}

            {step === 3 && (
                <div className="flex flex-col items-center justify-center w-full flex-1 px-40 bg-light-cream">
                    <h1 className=''>Tell us about your GOALS!</h1>
                    <h3>This information will ONLY be used to help us find your best match1</h3>
                    <Field labelName='Employment' fieldType='checkbox' fieldValue={dateOfBirth} onChange={setDateOfBirth} placeholderText='Enter your date of birth' />

                    <Divider />
                    <Button buttonText="Previous" onClick={handlePreviousStep} />
                    <Button buttonText="Next" onClick={handleNextStep} />
                    <Button buttonText="Submit" onClick={handleSubmit} />
                </div>
            )}
        </div>
    );
};

export default AboutForm;
