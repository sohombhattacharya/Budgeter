import React, { Component } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';
import ToDoList from './ToDoList';

class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
        this.createNewItem = this.createNewItem.bind(this);
    }
    
    createNewItem(description, price){
        this.state.items.push(<ToDoItem description={description} price={price}/>);
        this.setState({items: this.state.items});
    }
    render() {
        return (
            <div align="center">
                <ToDoForm createNewItem={this.createNewItem}/>
                <ToDoList items={this.state.items}/>
            </div>
        );
    }

}

export default App;
