import React, { Component } from 'react';
class ToDoItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: this.props.description,
            price: this.props.price
        };
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem(event){
        event.preventDefault();
        this.props.deleteItem(this.props.index);
    }
    render() {
        return (
            <li>
                <div>
                    {this.state.description} <span class="badge">{this.state.price}</span>
                    <button type="button" className="btn btn-xs btn-danger img-circle" onClick={this.deleteItem}>  &#xff38;</button>
                </div>
            </li>
            );
    }
}
export default ToDoItem;