"use client";
import Form from "../components/loginForm";
import { useState, useEffect } from "react";
import {
  GetUsers,
  rankMostMatchingEntries,
  getCurrentUserData,
} from "../api/getUsers";
import { addMentor } from "../api/addMentor";

const itemList = [
  { id: 1, text1: "Text 1-1", text2: "Text 1-2" },
  { id: 2, text1: "Text 2-1", text2: "Text 2-2" },
  { id: 3, text1: "Text 3-1", text2: "Text 3-2" },
  // Add more items as needed
];

export default function Login() {
  const [availableMentors, setAvailableMentors] = useState([]);

  // Get the Mentors
  useEffect(() => {
    let getData = async () => {
      let data = await GetUsers();
      let currentUserIn = await getCurrentUserData();
      let ranked = rankMostMatchingEntries(data, currentUserIn);
      setAvailableMentors(ranked);
    };
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 min-h-screen flex-col bg-green">
      <div className="bg-light-cream rounded-xl p-12 w-2/3">
        <h1 style={{ color: "black", textAlign: "center", fontSize: 30 }}>
          Add your Mentors
        </h1>
        {availableMentors.map((item, index) => (
          <div style={{ color: "black" }} key={index}>
            <span>
              First Name: {item.object.firstName}, Last Name:{" "}
              {item.object.firstName}, Compatency Score: {item.score}
            </span>
            <button
              style={{ color: "red", paddingLeft: 30 }}
              onClick={() => addMentor(item.object.id)}
              href='/dashboard'
            >
              {" "}
              Add As Mentor
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
