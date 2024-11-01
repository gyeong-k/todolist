import React from "react";
import { Component } from "react";

interface MyProps {
  weather: string;
  children: React.ReactNode;
}
//React.FC<props의_타입>
// const MyWeather: React.FC<MyProps> = ( { children, weather } ) => {

//   return (
//     <div>
//       {children}
//       <p></p>
//       오늘의 날씨는 {weather} 입니다.
//     </div>
//   );
// };

//클래스 컴포넌트
class MyWeather extends Component<MyProps> {
  render() {
    const { children, weather } = this.props;
    return (
      <div>
        {children}
        <p></p>
        오늘의 날씨는 {weather} 입니다.
      </div>
    );
  }
}

export default MyWeather;
