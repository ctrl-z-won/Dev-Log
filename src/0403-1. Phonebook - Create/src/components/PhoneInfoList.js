import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

// PhoneInfo 에서 받은 각각의 Information 들을 props (data 배열)에 담기 
class PhoneInfoList extends Component {
  
  // App.js로부터 받아온 props
  static defaultProps = {
    data: []
  }

  render() {
    
    const { data } = this.props;
    
    const list = data.map(
      info => (<PhoneInfo key={info.id} info={info}/>)
    );

    return (
      <div>
        {list}    
      </div>
    );
  }
}

export default PhoneInfoList;