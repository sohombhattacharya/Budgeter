import React, { Component } from 'react';
class ToDoList extends React.Component {
    render(){
        return(
        <ul>
            {this.props.items}
        </ul>
        
        );
    
    }
}

export default ToDoList;