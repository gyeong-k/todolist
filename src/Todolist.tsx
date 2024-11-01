import React, { useState } from "react";
import { Button } from "react-bootstrap";

//type : 가독성, 유지보수
//인터페이스 안쓴이유 -> 기존의 타입을 사용해 새로운 타입
//인터페이스 -> 새로운 객체 구조
type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

//React.FC : 함수컴포넌트 -> 프롭스의 타입 명시 역할
//state : 리액트에선 변수대신 데이터 저장 -> 데이터의 상태 / 데이터를 동적 감시해 데이터가 변하면 반영
//state를 변경하기 위해선 별도의 변경함수 필요 : setTodos => 멤버함수같은 개념
const TodoList: React.FC = () => {
  const title: string = "오늘 할 일";
  //구조문해할당
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "공부하기", isChecked: false },
    { id: 2, text: "잠자기", isChecked: false },
    { id: 3, text: "미팅하기", isChecked: false },
  ]); //state의 데이터, 변경함수 순서

  const [newtodo, setNewTodo] = useState<string>("");
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  //prevItems = todos
  const handleCheckedChange = (itemId: number) => {
    setTodos((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const addTodo = () => {
    if (newtodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newtodo, isChecked: false }]);
      setNewTodo("");
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id)); //넘어온 id랑 같은 건 제외시키고 새로운 배열 생성해 화면에 보여줌
  };

  const handleTodoClick = (todo: Todo) => {
    setShowDetail(true);
    setSelectedTodo(todo);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };
  return (
    <div>
      <h1>{title}</h1>
      <p></p>
      <div className="container">
        <div>
          <input
            type="text"
            placeholder="할일 입력"
            style={{ marginRight: "10px", writingMode: "horizontal-tb" }}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button variant="warning" onClick={addTodo}>
            추가
          </Button>
        </div>
        <p></p>

        <div className="board">
          <ul>
            {todos.map((todo, index) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  onChange={() => {
                    handleCheckedChange(todo.id);
                  }}
                ></input>
                <span onClick={() => handleTodoClick(todo)}>
                  {todo.isChecked ? (
                    <del>{todo.text}</del>
                  ) : (
                    <span>{todo.text}</span>
                  )}
                </span>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="delbutton"
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TodoList;
