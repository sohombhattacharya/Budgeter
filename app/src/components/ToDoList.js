import React, { Component } from 'react';
class ToDoList extends React.Component {
    
    deleteItem(index){
        this.props.deleteItem(index);
    }
    render(){
        var items = Object.values(this.props.items);
        return(
        <ul>
            {items}
        </ul>
        
        );
    
    }
}

export default ToDoList;