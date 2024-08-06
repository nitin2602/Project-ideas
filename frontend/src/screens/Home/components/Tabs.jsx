import axios from "axios";
import React, { useEffect, useState } from "react";
import IdeasTab from './IdeasTab';

const Tabs = () => {
  const [Ideas, setIdeas] = useState([]);
  const fetchIdeas = async () => {
    try {
      const response = await axios.get("http://localhost:3000/ideas");

      console.log("Ideas response:", response.data);
      setIdeas(response.data);
      console.log("Ideas array:", Ideas);
    } catch (error) {
      console.error("Error fetching ideas:", error);
    } finally {
    }
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  return (
    <div>
      <button className="btn btn-accent mt-5 text-lg">Latest Ideas 🤔</button>
      <ul>
        {Ideas.length > 0 ? (
          Ideas.map((idea) => (
            <li key={idea.id}>
              <IdeasTab content ={idea.content} username = {idea.username} createdAt = {idea.createdAt}/>
            </li>
          ))
        ) : (
          <div className="flex w-full flex-col gap-4 justify-center items-center mt-2 ">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Tabs;
