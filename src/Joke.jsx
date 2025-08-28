import React from "react";

const Joke = (props) => {
  return (
    <>
      {/* changing display as style  */}
      <p style={{ display: props.setup ? "block" : "none" }} className="setup">
        Set Up: {props.setup}
      </p>

      {/* conditional rendering  */}
      {props.punchline && (
        <p className="punchline">Punch line: {props.punchline}</p>
      )}
      <hr />
    </>
  );
};

export default Joke;
