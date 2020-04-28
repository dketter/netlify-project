import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.decreaseCount = this.decreaseCount.bind(this);
    }

    increaseCount() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decreaseCount() {
        count = this.state.count - 1
    }

    render() {
        return <div className={'container'}>
            <h2>Counter</h2>
            <p>Count: {this.count}</p>
            <button onClick={this.increaseCount}>+</button>
            <button onClick={this.decreaseCount}>-</button>
        </div>
    }
}

export default Counter;