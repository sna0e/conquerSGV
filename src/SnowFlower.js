import React, { useState, useEffect } from "react";
import OneBranch from "./OneBranch";

const SnowFlower = () => {

  const [height, setHeight] = useState(0);

  function setOne() {
    var newHeight = height;
    newHeight++;
    setHeight(newHeight);
  }


  /*const paths = [];

  function setFlower() {
    for (let i = 0; i < 6; i++) {

        const radius = 0;
        const centerX = 0;
        const centerY = 0;

        const angle = 360 - (i * 2 * Math.PI) / 6;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        //<g key={i} transform={`translate(${x}, ${y}) rotate(${i * (360 / 6)} 116 494) scale(0.1)`}>
        paths.push(
            <OneBranch index={i} x={x} y={y} height={494-height*(494/10)} style={{position:"absolute"}}/>
        );
      }
  }*/  



  return (
    <div>
        <div sytle={{position:"relative", width:"232px", height:"494px"}}>
            <OneBranch index={0} x={0} y={0} height={494-height*(494/10)} style={{position:"absolute"}}/>
            <OneBranch index={1} x={210} y={120} height={494-height*(494/10)} style={{position:"absolute"}}/>
            <OneBranch index={2} x={210} y={360} height={494-height*(494/10)} style={{position:"absolute"}}/>
            <OneBranch index={3} x={0} y={475} height={494-height*(494/10)} style={{position:"absolute"}}/>
            <OneBranch index={4} x={-210} y={350} height={494-height*(494/10)} style={{position:"absolute"}}/>
            <OneBranch index={5} x={-210} y={100} height={494-height*(494/10)} style={{position:"absolute"}}/>
        </div>
        <div>
            <button onClick={setOne}>increase</button>
        </div>
    </div>

  );
};

export default SnowFlower;
