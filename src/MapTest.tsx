import { fireEvent } from "@testing-library/react";
import React from "react";

const MapTest = () => {
  const fruits = ["apple", "banana", "orange"];
  return (
    <div>
      <h2>과일</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li> //맵 사용시 키 속성 넣어주기
        ))}
      </ul>
    </div>
  );
};

export default MapTest;
