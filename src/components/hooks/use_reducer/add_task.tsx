import { useState, useReducer } from "react";

function reducer(state, action) {
  return { state, action };
}

export const AddTask: React.FC<{ onAddTask: (text: string) => void }> = ({
  onAddTask,
}) => {
  const [text, setText] = useState("");
  //const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="add-todo-container">
      <input
        type="text"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </div>
  );
};
