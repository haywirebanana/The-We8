// import React, { useState } from 'react';
import TodoList from '../components/todoList';
import AddTodoForm from '../components/addTodoForm';

interface Todo {
  id: number;
  photo: string;
  name: string;
  location: string;
  description: string;
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    // Sample todo data
    {
      id: 1,
      photo: 'https://example.com/photo.jpg',
      name: 'John Doe',
      location: 'City, Country',
      description: 'This is a sample todo description.',
    },
    // Add more todos as needed
  ]);

  const handleAddTodo = (newTodo: Todo) => {
    // Handle adding newTodo to the todos list
    setTodos(prevTodos => [...prevTodos, { id: prevTodos.length + 1, ...newTodo }]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;
