import React from 'react';

interface TodoProps {
  todo: {
    id: number;
    photo: string;
    name: string;
    location: string;
    description: string;
  };
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  return (
    <div>
      <img src={todo.photo} alt={todo.name} />
      <h3>{todo.name}</h3>
      <p>{todo.location}</p>
      <p>{todo.description}</p>
    </div>
  );
};

export default Todo;
