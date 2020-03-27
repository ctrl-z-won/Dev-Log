import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  
  // PhoneForm에서 전달받은 내용을 여기서 확인
  // PhoneForm에게 전달받을 내용(data)를 보여주는 역할
  handleCreate = (data) => {
    console.log("form에서 전달받은 내용 : ", data);
  }

  render() {
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}  // PhoneForm에게 onCreate라는 Props 전달
        />
      </div>
    );
  }
}

export default App;