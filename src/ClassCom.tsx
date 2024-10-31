//클래스 컴포넌트 만들기
//반드시 아래의 Component 클래스를 상속해야함
import { Component } from "react";

//상속
class ClassCom extends Component {
  //render = 화면에 그림을 그려준다
  render() {
    return <div>클래스형 컴포넌트</div>;
  }
}

//내보내기
export default ClassCom;
