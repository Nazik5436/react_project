import { useState } from "react";
import { Greet } from "./components/Greet";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const user = {
    name: "Nazar",
    surname: "Melnyk",
    age: "16",
    city: "Khmelnytski",
  }

  return (
    <div className="App">
      <p>Лічильник: {count}</p>
      <button onClick={() => increment()}>Збільшити</button>
      <button onClick={() => decrement()}>Зменшити</button>

      <Greet user={user}></Greet>
    </div>
  );
}

export default App;
