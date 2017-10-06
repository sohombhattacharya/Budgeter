import React, { Component } from 'react';
class TodoItem extends React.Component {

    render() {
        var item = this.props.item;
        return (
                <li>{item.description} Price: {item.price}</li>
            );
    }
}