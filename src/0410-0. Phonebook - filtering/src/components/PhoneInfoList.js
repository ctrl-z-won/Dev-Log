import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn('onRemove not defined'),
    onUpdate: () => console.warn('onUpdate not defined'),
  }

  // 불변성을 지키기 위해 이거 딱 하나 바뀜
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }

  render() {

    const { data, onRemove, onUpdate } = this.props;
    
    const list = data.map(  
      info => (
        <PhoneInfo
          key={info.id}
          info={info}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />)
    );

    return (
      <div>
        {list}    
      </div>
    );
  }
}

export default PhoneInfoList;