import React from 'react';
import MyApp from './MyApp';  // 컴포넌트의 이름은 항상 대문자

function App() {
  
  var myname = "민철"
  
  return (
    <div>
        <MyApp name={myname}/>
    </div>
  );
}

export default App;
