import React from "react";

function Firsthalf({logOut}) {
  return (
    <div className=" h-1/2 flex flex-col justify-evenly">
      <h1 className="text-6xl font-bold">Go beyond your mind's limitations</h1>
      <h2 className="text-lg font-semibold text-customGray leading-7">
        Personalized AI powered by what<br/> you've seen, said, and heard.
      </h2>
      <div>
        <button onClick={logOut}>Log Out</button>
      </div>
    </div>
  );
}

export default Firsthalf;
