import React, { Component } from 'react';
class BudgetForm extends React.Component {
    
    constructor(){
        super();
        this.state = {
            budget: 0.00
        }
        this.handleBudgetChange = this.handleBudgetChange.bind(this);
        this.setBudget = this.setBudget.bind(this);
    }
    setBudget(event){
        event.preventDefault();
        this.props.setBudget(this.state.budget);
    }
    handleBudgetChange(event) {
      this.setState({budget: event.target.value})
    }    
    render(){
        return (
            <form onSubmit={this.setBudget} class="form-inline">
                <div class="form-group">
                    <div class="input-group">
                    <span class="input-group-addon">Budget</span>
                    <input type="number"  class="form-control" id="price" min="0.01" step="0.01" class="form-control" id="budget" ref="budget" value={this.state.budget} onChange={this.handleBudgetChange}/>
                    </div>
                </div>
                <button type="submit" class="btn btn-default">Set</button>
            </form>            
            
        );
    }
}

export default BudgetForm;
