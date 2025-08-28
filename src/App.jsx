import { useState } from "react";
import Joke from "./Joke.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Joke
        setup="I told my wife she should embrace her mistakes."
        punchline="She gave me a hug."
      />
      <Joke setup="Why don’t programmers like nature? Too many bugs" />
    </>
  );
}

export default App;
