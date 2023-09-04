import { useState } from "react";
export function CountCats() {
  const [catCount, setCats] = useState<Array<string>>([]);

  function addCat() {
    setCats([...catCount, `🐈`]);
  }

  return (
    <>
      <h2>useState</h2>
      <p>
        {catCount.map(() => {
          return `🐈`;
        })}
      </p>
      <button onClick={addCat}>
        There are {catCount.length} cats
        {catCount.length > 0 && `🥳`}
        {catCount.length === 0 && `😦`}
      </button>
    </>
  );
}
