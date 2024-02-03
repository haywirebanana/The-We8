import React, { useState, ChangeEvent } from 'react';

interface AddTodoFormProps {
  onAddTodo: (newTodo: Todo) => void;
}

interface TodoInput {
  photo: string;
  name: string;
  location: string;
  description: string;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState<TodoInput>({
    photo: '',
    name: '',
    location: '',
    description: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTodo(prevTodo => ({ ...prevTodo, [name]: value }));
  };

  const handleAddTodo = () => {
    onAddTodo(newTodo as Todo);
    setNewTodo({
      photo: '',
      name: '',
      location: '',
      description: '',
    });
  };

  return (
    <div>
      <input type="text" name="photo" placeholder="Photo URL" onChange={handleInputChange} value={newTodo.photo} />
      <input type="text" name="name" placeholder="Name" onChange={handleInputChange} value={newTodo.name} />
      <input type="text" name="location" placeholder="Location" onChange={handleInputChange} value={newTodo.location} />
      <input type="text" name="description" placeholder="Description" onChange={handleInputChange} value={newTodo.description} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodoForm;
