import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p className="text-5xl font-bold underline bg-gray-400 mb-3" > Start Puddy </p>
        <button className="bg-yellow-300 w-500 h-500"onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
