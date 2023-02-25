import React from "react";

const App = (props: { test: string }) => {
  const handleClick = () => {
    console.log("clicked!!!!!!!!!!!!!!!!!!!!");
    debugger;
  };

  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default App;
