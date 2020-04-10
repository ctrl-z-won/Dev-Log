import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
      // 클릭하면 onToggle 함수 실행 : 했다 안했다 체크용
      // 체크 값이 활성화(checked)되어있으면 우측에 체크마크 (✓ &#x2713;) 를 보여주고,
      // 마우스가 위에 있을때는 좌측에 엑스마크 (× &times;) 보여주기
      
      // onClick={() => onToggle(id)}  VS onClick={onToggle{id}}
      <div className="todo-item" onClick={() => onToggle(id)}> 
        
        <div className="remove" onClick={(e) => { // 아이템을 삭제시키는 함수
          e.stopPropagation();                    // onToggle 이 실행되지 않도록 함
          onRemove(id)
          }
        }>&times;</div>
        
        <div className={`todo-text ${checked && 'checked'}`}> 
          <div>{text}</div>
        </div>
        
        {
          checked && (<div className="check-mark">✓</div>)   // check 되어있으면 checkmark 보이기
        }

      </div>
    );
  }
}

export default TodoItem;