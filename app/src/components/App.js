import React, { Component } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';
import ToDoList from './ToDoList';

class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            items: [],
            count: 0,
            budget: 0.00
        };
        this.createNewItem = this.createNewItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    
    createNewItem(description, price){
        this.setState({count: this.state.count + 1})
        this.state.items.push(<ToDoItem description={description} price={price} key={this.state.count} index={this.state.count} deleteItem={this.deleteItem} />);
        this.setState({items: this.state.items});
    }
    deleteItem(index){
		var items = this.state.items;
        console.log(items);
		items = items.filter(function (i) {
			return i.props.index !== index;
		});
        this.setState({items: items});
        console.log(items);
    }
    render() {
        return (
            <div align="center" >
                <ToDoForm createNewItem={this.createNewItem}/>
                <ToDoList items={this.state.items} deleteItem={this.deleteItem}/>
            </div>
        );
    }

}

export default App;
