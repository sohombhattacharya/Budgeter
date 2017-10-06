import React, { Component } from 'react';
class TodoItem extends React.Component {
    constructor(props){
        super(props);
        this.state.description = this.props.description;
        this.state.price = this.props.price;
    }
    render() {
        return (
                <li>{this.state.description} Price: {this.state.price}</li>
            );
    }
}