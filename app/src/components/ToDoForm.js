import React, { Component } from 'react';
class ToDoForm extends React.Component {
    
    constructor(){
        super();
        this.createNewItem = this.createNewItem.bind(this);
    }
    
    createNewItem(event) {
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
            <form onSubmit={this.createNewItem}>
                <input type="text" ref="newItemDescription" value="" required/>
                <input type="text" ref="newItemPrice" value="" required/>
                <button type="submit">Add</button>
            </form>            
            
        );
    }

}

export default ToDoForm;