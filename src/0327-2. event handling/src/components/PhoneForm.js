import React, { Component } from 'react';

class PhoneForm extends Component {
  
  state = {
    name: '',
    phone: ''
  }

  handleChange = (e) => {
    // console.log(e) --> 이벤트 객체
    // console.log(e.target) --> 이벤트 객체의 대상
    //        e.target === <input placeholder="~~" name = "~~" value = "" > 
    this.setState({
      [e.target.name]: e.target.value   // 계산된 속성명. [e.target.name]이 "계산된 값" 이 담김 
    });
  }
  
  render() {
    return (
      <form>

        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        
        <div>이름 : {this.state.name} 전화번호 : {this.state.phone}</div>
      
      </form>
    );
  }
}

export default PhoneForm;