import React from 'react';

const ToDoList = () => {
  const tasks = [
    "Enroll into a program for my children about sports",
    "Complete coding assignment",
    "Read a programming book",
    // Add more tasks as needed
  ];

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
