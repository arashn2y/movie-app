import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button className="bg-blue-500 text-white p-2 rounded cursor-pointer hover:bg-blue-600 transition-colors" onClick={() => setCount(count + 1)}>
        count is {count}
      </button>
    </main>
  );
}

export default App;
