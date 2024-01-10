import {ReactComponent as Branch} from "./branch2.svg";
import Branches from "./Branches";
import SnowFlower from "./SnowFlower";
import { useState } from "react";
import "./App.css";




function App() {

  const [height, setHeight] = useState(10);  

  function setOne() {
    var newHeight = height;
    newHeight++;
    setHeight(newHeight);
  }


  return (
    <div className="App">
      <div id="branches"><Branches x={421} y={0} height={494-height*(494/10)}/></div>
      <button onClick={setOne}>increase</button>
    </div>
  );
}

//<SnowFlower/>

export default App;
