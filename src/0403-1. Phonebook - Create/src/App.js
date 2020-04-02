import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2  // 렌더링되지 않는 값은 state 로 선언하지 않는 게 좋음

  state = {
    
    // state 안에 information 배열
    information: [
      
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    
    ]
  }

  // PhoneForm으로부터 data를 받아 state (information) 에 추가 (concat) 해주는 함수
  handleCreate = (data) => {
    // 자바스크립트 변수 information 에 지금까지의 state 받아옴
    const { information } = this.state;
    
    // information 변수 업데이트
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  
  }
  
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <PhoneInfoList data={this.state.information}/>
      </div>
    );
  }
}

export default App;