import React, { Component } from 'react';
class ToDoItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: this.props.description,
            price: this.props.price
        };
    }
    render() {
        return (
                <li>{this.state.description} Price: {this.state.price}</li>
            );
    }
}
export default ToDoItem;