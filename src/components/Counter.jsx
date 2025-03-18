import React from 'react';
import '../styles/counter.css'

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: props.initialCounter,
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    }
    decrement() {
        this.setState((prevState) => ({
            counter: prevState.counter - 1
        }));
    }

    render() {
        return React.createElement(
            'div',
            {className: 'counterWrapper'},

            React.createElement(
                'h2',
                null,
                `Counter: ${this.state.counter}`
            ),
            React.createElement(
                'button',
                {onClick: this.increment},
                'Increment'
            ),
            React.createElement(
                'button',
                {onClick: this.decrement},
                'Decrement'
            )
        )
    }
}
