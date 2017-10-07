import React, { Component } from 'react';
class ToDoList extends React.Component {
    
    deleteItem(index){
        this.props.deleteItem(index);
    }
    render(){
        console.log(this.props.items);
        return(
        <ul>
            {this.props.items}
        </ul>
        
        );
    
    }
}

export default ToDoList;