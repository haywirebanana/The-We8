import React from "react";
import Sidebar from "../../components/sidebar";
import { DiGroovy } from "react-icons/di";
import Image from "next/image";

const TodoCard = ({ title, todos }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 w-64">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button className="bg-blue-500 text-white px-2 py-1 rounded-md">Add</button>
      </div>
      <ul className="list-disc pl-4">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default function Activities() {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />

      <div className="w-full h-dvh">
        <div className="flex h-1/3 items-center justify-center bg-green">
        <Image
                            src='/images/banners/todos.png'
                            alt="banner"
                            width={2000}
                            height={300}>    

                        </Image>        </div>

        <div className="flex flex-wrap overscroll-auto justify-center w-full max-h-[calc(100%-4rem)] py-8 bg-green gap-4">
          {/* Education Card */}
          <TodoCard
            title="Education"
            todos={["Explore Universities", "Visit Library", "Get Library Pass"]}
          />

          {/* Employment Card */}
          <TodoCard
            title="Employment"
            todos={["Make Resume Better", "Cover letter?"]}
          />

          {/* Health Card */}
          <TodoCard
            title="Health"
            todos={["Exercise for 30 minutes", "Prepare healthy meals"]}
          />

          {/* Travel Card */}
          <TodoCard
            title="Travel"
            todos={["Get a Transit App", "Buy Monthly Transit Pass"]}
          />
        </div>

        {/* Mentor Recommendations */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Mentor Recommendations</h2>
          {/* Mentor A Recommendations */}
          <ul className="list-disc pl-4">
            <li>Mentor A Recommends: <a href="https://ineed-help.org/" target="_blank" rel="noopener noreferrer">https://ineed-help.org/</a></li>
          </ul>

          {/* Mentor B Recommendations */}
          <ul className="list-disc pl-4 mt-4">
            <li>Mentor B Recommends: <a href="https://example.com/mentor-b" target="_blank" rel="noopener noreferrer">https://example.com/mentor-b</a></li>
            <li>Mentor B Recommends: Don't Stress! Everything is gonna be okay</li>

          </ul>

          {/* Mentor C Recommendations */}
          <ul className="list-disc pl-4 mt-4">
            <li>Mentor C Recommends: We Love you!!!</li>

          </ul>
        </div>
      </div>
    </div>
  );
}
