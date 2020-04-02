import React, { Component } from 'react';

// 각각의 Phone Information 컴포넌트
class PhoneInfo extends Component {
  
    static defaultProps = {
    info: {
      name: '이름',
      phone: '010-0000-0000',
      id: 0
    }
  }

  render() {
    // style 은 이렇게 적용하기
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };

    // name, phone, id 변수 안에는 this.props.info 담기
    const {
      name, phone, id
    } = this.props.info;

    return (
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
      </div>
    );
  }
}

export default PhoneInfo;