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
        this.editItem = this.editItem.bind(this);
        this.setBudget = this.setBudget.bind(this);
    }
    createNewItem(description, price){
        this.setState({count: this.state.count + 1})
        var items = this.state.items; 
        items[this.state.count] = <ToDoItem description={description} price={price} key={this.state.count} index={this.state.count} deleteItem={this.deleteItem} editItem={this.editItem}/>;
        this.setState({items: items});
    }
    deleteItem(index){
        var items = this.state.items; 
        delete items[index];
        this.setState({items: items});
    }
    editItem(index){
        var items = this.state.items; 
        var item = items[index];
        var newDescription = prompt("Enter new name", item.props.description)
        if (newDescription != null && newDescription != ""){
            var newPrice = prompt("Enter new price", item.props.price)
            if (newPrice != null && newPrice != ""){
                delete items[index]
                this.createNewItem(newDescription, newPrice)
            }

        }
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
                <ToDoList items={this.state.items} deleteItem={this.deleteItem} editItem={this.editItem} budget={this.state.budget}/>
            </div>
        );
    }

}

export default App;
