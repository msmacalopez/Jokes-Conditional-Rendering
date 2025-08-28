import { useState } from "react";
import Joke from "./Joke.jsx";
import jokesData from "./jokeData.js";

function App() {
  return (
    <>
      <Joke
        setup="I told my wife she should embrace her mistakes."
        punchline="She gave me a hug."
        upvotes={10}
        ispun={true}
        // array of objects [{},{},{}]
        comments={[
          { author: "josh", text: "mytext", title: "title" },
          { author: "josh", text: "mytext", title: "title" },
          { author: "josh", text: "mytext", title: "title" },
        ]}
      />
      <Joke
        setup="Why don’t programmers like nature? Too many bugs"
        upvotes={10}
        ispun={true}
        // array of objects [{},{},{}]
        comments={[
          { author: "josh", text: "mytext", title: "title" },
          { author: "josh", text: "mytext", title: "title" },
          { author: "josh", text: "mytext", title: "title" },
        ]}
      />
    </>
  );
}

export default App;
