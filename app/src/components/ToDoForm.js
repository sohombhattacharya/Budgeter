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
        if (this.state.description !== "" && this.state.price !== "") {
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
                    <div class="input-group">
                    <span class="input-group-addon">Item</span>
                    <input type="text"  class="form-control" id="description" ref="newItemDescription" value={this.state.description} onChange={this.handleDescriptionChange}/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                    <span class="input-group-addon">Price</span>
                    <input type="number"  class="form-control" id="price" min="0.01" step="0.01" ref="newItemPrice" value={this.state.price} onChange={this.handlePriceChange}/>
                    </div>
                </div>
                <button type="submit" class="btn btn-default">Add</button>
            </form>            
            
        );
    }

}

export default ToDoForm;
