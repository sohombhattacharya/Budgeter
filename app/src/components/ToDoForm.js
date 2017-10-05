import React, { Component } from 'react';
class ToDoForm extends React.Component {
    create(event) {
        event.preventDefault();
        var description = this.refs.newItemDescription.value;
        var price = this.refs.newItemPrice.value;
        if (description == "" && price == "") {
            this.props.createNewItem(description, price);
            this.refs.newItemDescription.value = '';
            this.refs.newItemPrice.value = '';
        }
    }
    render(){
        return (
            <form onSubmit={this.create.bind(this)}>
                <input type="text" ref="newItemDescription" value="" required><input type="text" ref="newItemPrice" value="" required><button type="submit">Add</button>
            </form>            
            
        );
    }

}