import React, { useEffect } from "react";
import _ from "lodash";
import axios from "axios";
import "./style.css";

const App = () => {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
      console.log(res);
    });
  }, []);

  const handleClick = () => {
    console.log("clicked!!!!!!!!!!!!2321!!!!!!!!");
    debugger;
  };

  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default App;
