import React, { Component } from 'react';

class Budget extends Component {

    constructor(){
        this.state = {
            budget: 0:00
        }
    }
    render(){
        return (
            <form onSubmit={this.createNewItem} class="form-inline">
                <div class="form-group">
                <button type="submit" class="btn btn-default">Set Budget</button>
            </form>            
            
        );        
    }
}