import React, { Component } from 'react';
class ToDoForm extends React.Component {
    
    constructor(){
        super();
        this.state = {
            description: "",
            price: ""
        }
        this.createNewItem = this.createNewItem.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
    }
    
    createNewItem(event) {
        event.preventDefault();
        
        if (this.state.description != "" && this.state.price != "") {
            this.props.createNewItem(this.state.description, this.state.price);
            this.setState({description: "", price: ""});
        }
    }
    
    handleDescriptionChange(event) {
      this.setState({description: event.target.value})
    }
    
    handlePriceChange(event) {
      this.setState({price: event.target.value})
    }    
    render(){
        return (
            <form onSubmit={this.createNewItem} class="form-inline">
                <div class="form-group">
                    <label for="item">Item:</label>
                    <input type="text" ref="newItemDescription" value={this.state.description} onChange={this.handleDescriptionChange}/>
                </div>
                <div class="form-group">
                    <label for="item">Price:</label>
                    <input type="number" min="0.01" step="0.01" ref="newItemPrice" value={this.state.price} onChange={this.handlePriceChange}/>
                </div>
                <button type="submit" class="btn btn-default">Add</button>
            </form>            
            
        );
    }

}

export default ToDoForm;
/*
            <form onSubmit={this.createNewItem}>
                <input type="text" ref="newItemDescription"/> 
                <input type="text" ref="newItemPrice"/>
                <button type="submit">+</button>
            </form> 
            */