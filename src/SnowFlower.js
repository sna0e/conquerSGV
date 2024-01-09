import React, { useState, useEffect } from "react";
import OneBranch from "./OneBranch";

const SnowFlower = ({"1", "2", "3", "4", "5", "6"}) => {


  const paths = [];
  const radius = 0;
  const centerX = 0;
  const centerY = 0;

  for (let i = 0; i < 6; i++) {
    const angle = 360 - (i * 2 * Math.PI) / 6;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    paths.push(
        <OneBranch key={i} transform={`translate(${x}, ${y}) rotate(${i * (360 / 6)} 116 494)`}/>
    );
  }

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" style={{height:"600px", width:"600px"}}>
        
        <svg width="232" height="494" viewBox="0 0 232 494" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="cut-off-bottom">
              <rect x="0" y={494-height*(494/10)} width="232" height="494"/>
            </clipPath>
          </defs>
          <g clipPath="url(#cut-off-bottom)" fill="skyblue" transform={"translate(0, 0) scale(1, 1)"}>{paths}</g>
        </svg>

      </svg>
      <button onClick={setOne}>increase</button>
     
    </div>
  );
};

export default SnowFlower;
