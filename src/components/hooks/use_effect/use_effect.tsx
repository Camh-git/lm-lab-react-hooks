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
  //TODO: make this work with an array of todos if you can find the time (and the brainpower in the warm weather)
  const [data, setData] = useState<toDo>();

  useEffect(() => {
    const list = async () => {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      result.json().then((json) => {
        setData(json);
      });
    };
    list();
  }, []);

  return (
    <>
      <h2>useEffect</h2>
      <p>Result:</p>
      {
        <>
          <div>
            <ul className="task-list">
              <li>
                <p>
                  completed:
                  {data?.completed && "true"} {!data?.completed && "false"}
                </p>
                <p>user: {data?.userId}</p>
                <p>task: {data?.id}</p>
                <p>title: {data?.title}</p>
              </li>
            </ul>
          </div>
        </>
      }
    </>
  );
};
