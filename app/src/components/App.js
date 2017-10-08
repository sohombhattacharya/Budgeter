import React, { Component } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';
import ToDoList from './ToDoList';
import BudgetForm from './BudgetForm';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: {},
            budget: 0.00,
            count: 0
        };
        this.createNewItem = this.createNewItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setBudget = this.setBudget.bind(this);
    }
    createNewItem(description, price){
        this.setState({count: this.state.count + 1})
        var items = this.state.items; 
        items[this.state.count] = <ToDoItem description={description} price={price} key={this.state.count} index={this.state.count} deleteItem={this.deleteItem} />;
        this.setState({items: items});
    }
    deleteItem(index){
        var items = this.state.items; 
        delete items[index];
        this.setState({items: items});
    }
    setBudget(val){
        this.setState({budget: val});
    }
    render() {
        return (
            <div class="container">
                <div align="center">
                    <BudgetForm setBudget={this.setBudget}/>
                    <ToDoForm createNewItem={this.createNewItem}/>
                    <h3>Budget: ${this.state.budget}</h3>
                </div>
                <ToDoList items={this.state.items} deleteItem={this.deleteItem} budget={this.state.budget}/>
            </div>
        );
    }

}

export default App;
