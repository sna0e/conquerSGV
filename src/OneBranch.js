import React, { useState, useEffect } from "react";

const OneBranch = ({index, x, y, height}) => {

  console.log(height);


  // <rect x="0" y={494-height*(494/10)} width="232" height="494"/>
  // 
  return (
    <svg 
      width="232" height="494" 
      viewBox="0 0 232 494" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      transform={`translate(${x}, ${y-index*494}) rotate(${index * (360/6)})`}
      >
      <defs>
        <clipPath id="cut-off-bottom">
          <rect x="0" y={height} width="232" height="494"/>
        </clipPath>
      </defs>
      <g clipPath="url(#cut-off-bottom)" fill="skyblue" >
        <path
          d="M87.1409 72.657V0.5H143.989V72.657V73.2979L144.611 73.142C155.927 70.3044 166.762 65.8066 176.76 59.7951L176.761 59.7949L201.102 45.1323L230.443 93.8224L206.103 108.485C206.102 108.485 206.102 108.485 206.102 108.485C187.157 119.885 166.223 127.594 144.407 131.202L143.989 131.271V131.695V493H87.1409V131.695V131.271L86.7224 131.202C64.9071 127.594 43.973 119.885 25.0276 108.485C25.0275 108.485 25.0274 108.485 25.0274 108.485L0.686369 93.8224L30.0278 45.1323L54.3691 59.7949L54.3695 59.7951C64.3683 65.8066 75.2025 70.3044 86.5192 73.142L87.1409 73.2979V72.657Z"
        />
      </g>
    </svg>
  );
};

export default OneBranch;
