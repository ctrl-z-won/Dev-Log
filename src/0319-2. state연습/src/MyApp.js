import React, { Component } from 'react';

class MyApp extends Component {
    
    state = {
        number : 0
    }

    static defaultProps = {
        name :'기본이름'
    }
    
    handleIncrease = () => {
        this.setState({
          number: this.state.number + 1
        });
      }

    handleDecrease = () => {
        this.setState({
            number: this.state.number -1
        });
    }

    /* 
    
    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
          number: number + 1
        })
    }

    */

    render() {
        return (
            <div>
                <div>
                    안녕, 내 이름은 {this.props.name}이야
                </div>
                <div>
                    <button onClick={this.handleIncrease}>더하기</button>
                    <button onClick={this.handleDecrease}>빼기</button>
                    값 : {this.state.number}
                </div>
            </div>
        );
    }
}

export default MyApp;