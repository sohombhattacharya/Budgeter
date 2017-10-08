import React, { Component } from 'react';
class ToDoItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: this.props.description,
            price: this.props.price
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
    }
    deleteItem(event){
        event.preventDefault();
        this.props.deleteItem(this.props.index);
    }
    editItem(event){
        event.preventDefault();
        this.props.editItem(this.props.index);
    }
    render() {
        return (
            <li class="list-group-item">
                <button type="button" class="close" aria-label="Close" onClick={this.deleteItem}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <button type="button" class="close" aria-label="Close" onClick={this.editItem}>
                    <span aria-hidden="true">&#9986;</span>
                </button>            
                {this.state.description}
                <span class="badge">${this.state.price}</span>
            </li>
            );
    }
}
export default ToDoItem;