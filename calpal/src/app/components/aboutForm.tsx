"use client"
import { useState, useEffect } from 'react';
import Field from './field';
import Button from './button';
import Dropdown from './dropdownField'
import Divider from './divideLine'
import CheckboxField from './checkboxField'

const AboutForm = () => {
    const [step, setStep] = useState(1);
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [languages, setLanguages] = useState('');
    const [proficiency, setProficiency] = useState('');
    const [originCountry, setOriginCountry] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [education, setEducation] = useState('');
    const [employmentStatus, setEmploymentStatus] = useState('');
    const [fieldOfWork, setFieldOfWork] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [employmentGoals, setEmploymentGoals] = useState('');

    // const [fieldName, setFieldName] = useState('');
    // const [fieldName, setFieldName] = useState('');
    // const [fieldName, setFieldName] = useState('');
    // const [fieldName, setFieldName] = useState('');
    // const [fieldName, setFieldName] = useState('');
    const [countries, setCountries] = useState([]);

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
            "https://valid.layercode.workers.dev/list/countries?format=select&value=code"
        )
            .then((response) => response.json())
            .then((data) => {
                setCountries(data.countries);
            });
    }, []);

    const employmentGoalList = ['Career Advancement',' Skill Development', 'Education and Training', 'Networking','Work-Life Balance','Entrepreneurship','Financial Growth & Literacy','Job Satisfaction','Leadership Development']
    const culturalGoalList = ["Arts and Entertainment","Festivals and Events","Ethnic and Cultural Diversity","Sports and Recreation","Museums and Galleries","Culinary Scene","Local Traditions and Heritage","Community Engagement","Outdoor Activities"]
    const healthGoalList = ["Physical Fitness","Mental Health and Well-being","Nutrition and Diet","Preventive Healthcare","Stress Management","Sleep Hygiene","Holistic Health Practices","Regular Health Check-ups","Emotional Resilience"]
    return (
        <div>
            {step === 1 && (
                <div className="flex flex-col items-center justify-center w-full flex-1 flex-col bg-light-cream">
                    <h1 className='font-serif text-2xl font-normal'>Tell us about you!</h1>
                    <Field labelName='Date of birth' fieldType='date' fieldValue={dateOfBirth} onChange={setDateOfBirth} placeholderText='Enter your date of birth' />
                    <div className='flex flex-row w-full gap-4' >
                        <Dropdown labelName='Gender identity' options={['Woman', 'Man', 'Transgender/Trans woman', 'Transgender/Trans man', 'Non-binary', 'Prefer not to say']} fieldValue={gender} onChange={setGender} />
                        <Dropdown labelName='Pronouns' options={['She/Her/Her', 'He/Him/His', 'They/Them/Their', 'Prefer not to say']} fieldValue={pronouns} onChange={setPronouns} />
                    </div>
                    <Field labelName='Languages' fieldType='text' fieldValue={languages} onChange={setLanguages} placeholderText='Please list the languages you are proficient in (i.e. English, Arabic)' />
                    <Dropdown labelName='English proficiency' options={['0 - No proficiency', '1 - Elementary proficiency', '2 - Limited working proficiency', '3 - Professional working proficiency', '4 - Full professional proficiency', '5 - Native/Bilingual proficiency']} fieldValue={proficiency} onChange={setProficiency} />
                    <Dropdown labelName='Origin country' options2={countries} fieldValue={originCountry} onChange={setOriginCountry} />
                    <Dropdown labelName='Ethnicity' options={['Asian', 'Black or African American', 'Hispanic or Latino', 'White', 'Prefer not to say']} fieldValue={ethnicity} onChange={setEthnicity} />
                    <Button buttonText="Next" onClick={handleNextStep} />
                </div>
            )}

            {step > 1 && step < 3 && (
                <div className="flex flex-col items-center justify-center w-full flex-1 flex-col bg-light-cream">
                    <h1 className='font-serif text-2xl font-normal'>Tell us about your professional background!</h1>
                    <Field labelName='Education level' fieldType='text' fieldValue={education} onChange={setEducation} placeholderText='What is your highest level of education?' />
                    <Field labelName='Employment status' fieldType='text' fieldValue={employmentStatus} onChange={setEmploymentStatus} placeholderText='What is your employment status?' />
                    <Field labelName='Field of work' fieldType='text' fieldValue={fieldOfWork} onChange={setFieldOfWork} placeholderText='What industry do you work in?' />
                    <Field labelName='Job title' fieldType='text' fieldValue={jobTitle} onChange={setJobTitle} placeholderText='What is your job title?' />
                    <div className='flex flex-row w-full gap-4 justify-center' >
                        <Button buttonText="Previous" onClick={handlePreviousStep} />
                        <Button buttonText="Next" onClick={handleNextStep} />
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="flex flex-col items-center justify-center w-full flex-1 flex-col bg-light-cream">
                    <h1 className='font-serif text-2xl font-normal'>Tell us about your goals!</h1>

                    <CheckboxField labelName='Educational' fieldType='checkbox' options={employmentGoalList} onChange={setEducation} placeholderText='What is your highest level of education?' />
                    <CheckboxField labelName='Cultural' fieldType='checkbox' options={culturalGoalList} onChange={setEducation} placeholderText='What is your highest level of education?' />
                    <CheckboxField labelName='Health' fieldType='checkbox' options={healthGoalList} onChange={setEducation} placeholderText='What is your highest level of education?' />

                    <div className='flex flex-row w-full gap-4 justify-center' >
                        <Button buttonText="Previous" onClick={handlePreviousStep} />
                        <Button buttonText="Submit" onClick={handleSubmit} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default AboutForm;
