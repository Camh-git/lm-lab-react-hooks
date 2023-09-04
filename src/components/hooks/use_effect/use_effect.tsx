import { useState, useEffect } from "react";

// make an api call using useEffect
interface toDo {
  completed: boolean;
  userId: number;
  id: number;
  title: string;
}

export const APICall = () => {
  // Your code here!
  const [data, setData] = useState<toDo>();

  useEffect(() => {
    const list = async () => {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      result.json().then((json) => {
        console.log(json);
        setData(json);
        console.log(data);
      });
    };
    list();
  }, []);

  return (
    <>
      <h2>useEffect</h2>
      <p>Result:{}</p>
    </>
  );
};
