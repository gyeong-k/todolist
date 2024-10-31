import React, { useState } from "react";

//React.FC : 함수컴포넌트 -> 프롭스의 타입 명시 역할
//state : 리액트에선 변수대신 데이터 저장 -> 데이터의 상태 / 데이터를 동적 감시해 데이터가 변하면 반영
//state를 변경하기 위해선 별도의 변경함수 필요 : setTodos => 멤버함수같은 개념
const TodoList: React.FC = () => {
  const title: string = "오늘 할 일";
  //구조문해할당
  const [todos, setTodos] = useState<string[]>([
    "공부하기",
    "잠자기",
    "미팅하기",
  ]); //state의 데이터, 변경함수 순서
  return (
    <div>
      <h1>{title}</h1>
      <p></p>
      <div className="container">
        <div className="board">
          <ul>
            <li>{todos[0]}</li>
            <li>{todos[1]}</li>
            <li>{todos[2]}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TodoList;
