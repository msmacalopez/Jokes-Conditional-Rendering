import React from "react";

const Joke = (props) => {
  console.log(props.upvotes + 1);
  console.log(!props.ispun);
  console.log(props.comments);

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
      <p className="upvotes"> UpVotes: {props.upvotes}</p>
      <p className="ispun"> IsPun: {props.ispun}</p>
      <p></p>
      <hr />
    </>
  );
};

export default Joke;
