"use client";
import { useState, useEffect } from "react";
import Field from "./field";
import Button from "./button";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full flex-1 flex-col bg-light-cream">
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
          placeholderText="Enter your password"
        />
        <Link href="/dashboard">Submit</Link>
      </div>
    </div>
  );
};

export default LoginPage;