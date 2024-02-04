"use client";
import { useState } from "react";
import Field from "./field";
import Button from "./button";
import { addDataToFirestore } from "../api/addUsers";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    //to be implemented
    console.log("Worked");
    const formData = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      email: email,
      password: password,
      mentors: [],
    };

    addDataToFirestore(formData);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full flex-1 flex-col bg-light-cream">
        <Field
          labelName="First Name"
          fieldType="text"
          fieldValue={firstName}
          onChange={setFirstName}
          placeholderText="Enter your first name"
        />
        <Field
          labelName="Last Name"
          fieldType="text"
          fieldValue={lastName}
          onChange={setLastName}
          placeholderText="Enter your last name"
        />
        <Field
          labelName="Address"
          fieldType="text"
          fieldValue={address}
          onChange={setAddress}
          placeholderText="Enter your address"
        />
        <Field
          labelName="Email"
          fieldType="email"
          fieldValue={email}
          onChange={setEmail}
          placeholderText="Enter your email address"
        />
        <Field
          labelName="Password"
          fieldType="password"
          fieldValue={password}
          onChange={setPassword}
          placeholderText="Enter a secure password"
        />
        <Field
          labelName="Confirm Password"
          fieldType="password"
          fieldValue={confirmPassword}
          onChange={setConfirmPassword}
          placeholderText="Re-enter your secure password"
        />
        <Button buttonText="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default RegisterPage;
